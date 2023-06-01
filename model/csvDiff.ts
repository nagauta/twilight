
export class CsvDiff {
  static async compareCsv(currentCsv: string, targetCsv: string): Promise<Boolean> {
    await Deno.writeTextFile("./tmpCsv1.csv", currentCsv);
    await Deno.writeTextFile("./tmpCsv2.csv", targetCsv);
    
    const command = new Deno.Command("diff", {
      args: ["tmpCsv1.csv", "tmpCsv2.csv"],
    });

    const output = await command.output();
    await Deno.remove("./tmpCsv1.csv");
    await Deno.remove("./tmpCsv2.csv");
    const diff = new TextDecoder().decode(output.stdout);
    console.log(`diff check \n${diff}`);
    if(diff.indexOf(",JP,") != -1){
      
      return true;
    } else{

      return false;
    }
  }
}