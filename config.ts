interface Config {
    egressIpRangesCsvStoredDate: string;
  }
  
  export const config: Config = JSON.parse(await Deno.readTextFile("./deno.json")).config;