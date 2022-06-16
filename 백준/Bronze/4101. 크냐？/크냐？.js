const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i < input.length; i++){
  let line = input[i].split(' ');
  let one = Number(line[0]);
  let two = Number(line[1]);

  if(one === 0 && two === 0) break;
  if(one > two) console.log('Yes');
  else console.log('No');
}