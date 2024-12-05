import loadInput from "../utils/utils";

const input = loadInput("./input.txt");

function isSafe(report: number[]): boolean {
  if (report.length <= 1) return true;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];

    if (diff < 1 || diff > 3) increasing = false;
    if (diff > -3 || diff < -1) decreasing = false;

    if (!increasing && !decreasing) return false;
  }

  return true;
}

function canBeSafeWithDampener(report: number[]): boolean {
  const len = report.length;
  if (len <= 2) return true;

  const tempReport = new Array(len - 1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      tempReport[j] = report[j];
    }
    for (let j = i + 1; j < len; j++) {
      tempReport[j - 1] = report[j];
    }

    if (isSafe(tempReport)) return true;
  }
  return false;
}

const results = input.reduce(
  (acc, line) => {
    const report = line.split(" ").map(Number);
    const isSimpleSafe = isSafe(report);

    return {
      part1: acc.part1 + (isSimpleSafe ? 1 : 0),
      part2: acc.part2 + (isSimpleSafe || canBeSafeWithDampener(report) ? 1 : 0),
    };
  },
  { part1: 0, part2: 0 }
);

console.log(results.part1);
console.log(results.part2);
