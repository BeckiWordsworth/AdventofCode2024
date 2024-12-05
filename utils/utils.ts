const fs = require("fs");
export default function loadInput(inputFile: string): string[] {
  return fs.readFileSync(inputFile, "utf8").split("\n");
}
