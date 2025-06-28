const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const nums = Array.from({ length: input }, (_, i) => i + 1);
const sumOfNums = nums.reduce((acc, cur) => acc + cur, 0);

for (let i = 1; i <= 2; i++) {
  console.log(sumOfNums ** i);
}

console.log(sumOfNums ** 2);