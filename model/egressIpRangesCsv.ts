import { encodeToString } from "https://deno.land/std@0.97.0/encoding/hex.ts";

export class EgressIpRangesCsv {
  private _text: string = "";
  private _hash: string = "";

  private constructor() {
    
  }

  public text(): string {
    
    return this._text;
  }

  public hash(): string {
    
    return this._hash;
  }

  public static async build(url: URL): Promise<EgressIpRangesCsv> {
    const resource = await fetch(
      url.href,
    );
    const egressIpRangesCsv = new EgressIpRangesCsv();
    egressIpRangesCsv._text = await resource.text();
    egressIpRangesCsv._hash = await this.getHash(egressIpRangesCsv._text);
    return egressIpRangesCsv;
  }

  private static async getHash(s: string): Promise<string> {
    const data = new TextEncoder().encode(s);
    const digest = await crypto.subtle.digest("sha-256", data.buffer);
    return encodeToString(new Uint8Array(digest));
  }
}
