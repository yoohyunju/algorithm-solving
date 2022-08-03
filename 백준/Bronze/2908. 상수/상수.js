const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const num1 = input[0].split('').reverse().join('');
const num2 = input[1].split('').reverse().join('');

if(num1 > num2){
  console.log(num1);
} else if(num1 < num2){
  console.log(num2);
}