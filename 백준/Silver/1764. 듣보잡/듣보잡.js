const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ");

const map = new Map();
let result = [];
let count = 0;

// 듣도 못한 사람
for (let i = 1; i <= NM[0]; i++) {
  map.set(input[i], i);
}

// 듣도 보도 못한 사람
for (let j = Number(NM[0]) + 1; j < input.length; j++) {
  if (map.has(input[j])) {
    result.push(input[j]);
    count++;
  }
}

console.log(`${count}
${result.sort().join('\n')}`);