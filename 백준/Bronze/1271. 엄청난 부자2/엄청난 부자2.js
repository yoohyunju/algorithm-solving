const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const money = BigInt(input[0]);
const person = BigInt(input[1]);

console.log((money / person).toString());
console.log((money % person).toString());