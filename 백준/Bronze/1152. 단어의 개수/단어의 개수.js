const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 처음 풀이 -> 공백만 있는 경우 ['']가 나와서 실패
// console.log(input.length);

let count = 0;

for(let i = 0; i < input.length; i++){
  if(input[i] === '') continue;
  count ++;
}

console.log(count);