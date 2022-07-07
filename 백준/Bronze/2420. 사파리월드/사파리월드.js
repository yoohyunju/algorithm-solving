const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0]) // 왜 BigInt여야 통과될까
const B = parseInt(input[1])

console.log(Math.abs(A-B))