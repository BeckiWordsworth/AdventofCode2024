import loadInput from "../utils/utils";

const input = loadInput("./input.txt");

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

const counts = rightArray.reduce((acc, right) => {
  acc.set(right, (acc.get(right) || 0) + 1);
  return acc;
}, new Map<number, number>());

const partTwo = leftArray.reduce((sum, left) => {
  const count = counts.get(left) || 0;
  return sum + left * count;
}, 0);

console.log(partOne);
console.log(partTwo);
