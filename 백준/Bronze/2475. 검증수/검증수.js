const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let result = 0;

for(const i of input){
  result += i * i;
}

console.log(result % 10);