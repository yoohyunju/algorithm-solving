const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const log = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  const [off, on] = input[i].split(" ");
  sum = sum - +off + +on;
  log.push(sum);
}

console.log(Math.max(...log));