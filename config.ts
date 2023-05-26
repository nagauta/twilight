import "https://deno.land/std@0.188.0/dotenv/load.ts";

interface Config {
    egressIpRangesCsvStoredDate: string;
    DATABASE_URL: string;
  }
  
  const json = JSON.parse(await Deno.readTextFile("./deno.json")).config;
  json.DATABASE_URL = Deno.env.get("DATABASE_URL");
  export const config: Config = json;
