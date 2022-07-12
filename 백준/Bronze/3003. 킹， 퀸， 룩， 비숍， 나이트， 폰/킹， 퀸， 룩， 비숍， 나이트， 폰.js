const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let chess = [1, 1, 2, 2, 2, 8];
let result = chess.map((el, idx) => el - input[idx]);

console.log(...result);