import "https://deno.land/std@0.188.0/dotenv/load.ts";

interface Config {
    egressIpRangesCsvStoredDate: string;
    DATABASE_URL: string;
    DIRECT_DATABASE_URL: string;
    HOSTNAME: string;
    USERNAME: string;
    DB: string;
    PASSWORD: string;
    R2_ACCOUNT_ID: string;
    R2_ACESS_KEY: string;
    R2_SECRET_ACESS_KEY: string;
  }
  
  const json = JSON.parse(await Deno.readTextFile("./deno.json")).config;
  json.DATABASE_URL = Deno.env.get("DATABASE_URL");
  json.DIRECT_DATABASE_URL = Deno.env.get("DIRECT_DATABASE_URL");
  json.HOSTNAME = Deno.env.get("HOSTNAME");
  json.USERNAME = Deno.env.get("USERNAME");
  json.DB = Deno.env.get("DB");
  json.PASSWORD = Deno.env.get("PASSWORD");
  json.R2_ACCOUNT_ID = Deno.env.get("R2_ACCOUNT_ID");
  json.R2_ACESS_KEY = Deno.env.get("R2_ACESS_KEY");
  json.R2_SECRET_ACESS_KEY = Deno.env.get("R2_SECRET_ACESS_KEY");
  export const config: Config = json;
