/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { CsvMonitor } from "./model/csvMonitor.ts";
import { Cron } from "https://deno.land/x/croner@6.0.3/dist/croner.js";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

// 1日おき(00:00:00)にチェックを行うようにする
const csvMonitor = new CsvMonitor();
new Cron("0 0 0 * * *", () => {
  console.log(`cron start: ${new Date().toISOString()}`);
  csvMonitor.monitor();

});

await start(manifest);
