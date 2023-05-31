import { HandlerContext } from "$fresh/server.ts";
import { PrismaClient } from "../../generated/client/deno/edge.ts";
import { EgressIpRangesCsv } from "../../model/egressIpRangesCsv.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const now = new Date();
  console.log(`diff start: ${now.toISOString()}`);
  const egressIpRangesCsv = await EgressIpRangesCsv.build(
    new URL("https://mask-api.icloud.com/egress-ip-ranges.csv"),
  );

  try {
    const prisma = new PrismaClient();
    const twFileHash = await prisma.twFileHash.findFirstOrThrow({
      orderBy: [
        {reg_time:"desc"}
      ]
    });
    
    console.log(
      `current: ${egressIpRangesCsv.hash()}, stored: ${twFileHash?.hash}@${twFileHash?.reg_time}`,
    );

    return returnResult(twFileHash?.hash === egressIpRangesCsv.hash());
  } catch (error) {

    console.log(`failed to find hash: ${error}`);
    return returnResult(false);
  }
};

async function returnResult(isSameCsv: boolean, storedDate?:Date) {
  const headers = { "content-type": "application/json" };
  const json = {
    isSameCsv,
    datetimeCurrent: (new Date()).toISOString(),
    datetimeStored: storedDate ?? "-",
  };
  return new Response(JSON.stringify(json), { headers });
}
