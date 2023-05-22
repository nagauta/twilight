import { HandlerContext } from "$fresh/server.ts";
import { encodeToString } from "https://deno.land/std@0.97.0/encoding/hex.ts";
import {config} from "../../config.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {

  // const now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  const now = formatDate(new Date());
  console.log(`diff start: ${now}`);
  const current = await fetch("https://mask-api.icloud.com/egress-ip-ranges.csv");
  const textCurrent = await current.text();
  const hashCurrent = await getHash(textCurrent);

  const textStored = await Deno.readTextFile("./egress-ip-ranges.csv");
  const hashStored = await getHash(textStored);
  const isSameCsv = hashCurrent === hashStored;
  console.log(`current: ${hashCurrent}, stored: ${hashStored}`);
  
  const headers = { "content-type": "application/json" };
  const json = { isSameCsv, datetimeCurrent: now, datetimeStored: config.egressIpRangesCsvStoredDate};
  return new Response(JSON.stringify(json), { headers });
};
async function getHash(s: string) {
  const data = new TextEncoder().encode(s);
  const digest = await crypto.subtle.digest("sha-256", data.buffer);
  return encodeToString(new Uint8Array(digest));
}
function formatDate(dt:Date) {
  const yyyymmdd = new Intl.DateTimeFormat(
    undefined,
    {
      year:   'numeric',
      month:  '2-digit',
      day:    '2-digit',
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
  )
  
  return yyyymmdd.format(dt);
}


