const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const result = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z'];

for(let i = 0; i < alphabet.length; i++){
  result.push(input.indexOf(alphabet[i]));
}

console.log(...result)