const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = "";

for(let i of input){
  if(i === i.toUpperCase()) result += i.toLowerCase();
  else result += i.toUpperCase();
}

console.log(result);