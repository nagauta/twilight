import { encodeToString } from "https://deno.land/std@0.97.0/encoding/hex.ts";
import { config } from "../config.ts";
import { PrismaClient } from "../generated/client/deno/edge.ts";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "https://esm.sh/@aws-sdk/client-s3";
import { twilightLogger } from "./twilightLogger.ts";
import { CsvDiff } from "./csvDiff.ts";

export class CsvMonitor {
  constructor() {
  }
  // メンバ関数
  public async monitor(): Promise<void> {
    const now = new Date();
    twilightLogger.info(`diff start: ${new Date().toISOString()}`);
    const current = await fetch(
      "https://mask-api.icloud.com/egress-ip-ranges.csv",
    );
    const textCurrent = await current.text();
    const hashCurrent = await getHash(textCurrent);

    const S3 = new S3Client({
      region: "auto",
      endpoint: `https://${config.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.R2_ACESS_KEY,
        secretAccessKey: config.R2_SECRET_ACESS_KEY,
      },
    });

    const result = await S3.send(
      new GetObjectCommand({
        Bucket: "twilight",
        Key: "egress-ip-ranges.csv",
      }),
    );
    const body = result.Body;
    const bodyAsString = await body.transformToString();
    const hashStored = await getHash(bodyAsString);

    console.log(
      `JP diff: ${await CsvDiff.compareCsv(textCurrent, bodyAsString)}`,
    );
    twilightLogger.info(`current: ${hashCurrent}, stored: ${hashStored}`);

    const isSameCsv = hashCurrent === hashStored;
    if (!isSameCsv) {
      // todo 新しいCSVをR2にアップロード
      const result = await S3.send(
        new PutObjectCommand({
          Body: textCurrent,
          Bucket: "twilight",
          Key: "egress-ip-ranges.csv",
        }),
      );

      // todo DBに新しいCSVのハッシュを保存
      const prisma = new PrismaClient();

      try {
        const twFileHash = await prisma.twFileHash.create({
          data: {
            hash: hashCurrent,
            reg_time: now,
          },
        });
        twilightLogger.info(`insert new hash: ${twFileHash.hash}.`);
      } catch (error) {
        twilightLogger.fatal(
          `failed to insert hash of file:${hashCurrent} ${error}.`,
        );
      }

      // todo ファイルの差分を確認する
      console.log("not same");
    } else {
      // 何もしない
      twilightLogger.info(`same csv`);
    }
  }
}

async function getHash(s: string) {
  const data = new TextEncoder().encode(s);
  const digest = await crypto.subtle.digest("sha-256", data.buffer);
  return encodeToString(new Uint8Array(digest));
}
