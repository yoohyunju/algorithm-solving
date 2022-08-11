const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const divisor = input[1].split(' ').map(n => Number(n)).sort((a, b) => a - b);

console.log(Number(divisor[0]) * Number(divisor[divisor.length - 1]));