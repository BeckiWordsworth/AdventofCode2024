const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

var leftArray: number[] = [];
var rightArray: number[] = [];

input.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  leftArray.push(left);
  rightArray.push(right);
});

leftArray.sort((a, b) => a - b);
rightArray.sort((a, b) => a - b);

const partOne = leftArray.map((left, idx) => Math.abs(left - rightArray[idx])).reduce((sum, val) => sum + val, 0);

const counts = new Map<number, number>();
rightArray.forEach((right) => {
  const count = counts.get(right) || 0;
  counts.set(right, count + 1);
});

const partTwo = leftArray.reduce((sum, left) => {
  const count = counts.get(left) || 0;
  return sum + left * count;
}, 0);

console.log(partOne);
console.log(partTwo);
