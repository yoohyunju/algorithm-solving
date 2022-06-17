const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = input[0];
const b = input[1];

const defense = a - (a * b * 0.01);

if(defense >= 100) {
  console.log(0);
}
else console.log(1);