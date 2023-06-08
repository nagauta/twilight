const env = Deno.env.toObject();
enum logLevel {
  Info = "info",
  Warn = "warn",
  Fatal = "fatal",
}
class TwilightLogger {
  private static instance: TwilightLogger;

  private constructor() {
  }

  public static getInstance(): TwilightLogger {
    if (!TwilightLogger.instance) {
      TwilightLogger.instance = new TwilightLogger();
    }
    return TwilightLogger.instance;
  }

  public info(text: string) {
    this.log(logLevel.Info, text);
  }

  public warn(text: string) {
    this.log(logLevel.Warn, text);
  }

  public fatal(text: string) {
    this.log(logLevel.Fatal, text);
  }

  private log(logLevel: logLevel, text: string) {
    fetch(`https://api.axiom.co/v1/datasets/${env.AXIOM_DATASET}/ingest`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.AXIOM_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          "_time": (new Date()).toISOString(),
          "data": `${logLevel}: ${text}`,
        },
      ]),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const twilightLogger = TwilightLogger.getInstance();
