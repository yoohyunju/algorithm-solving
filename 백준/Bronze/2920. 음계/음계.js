const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const compareArr = input.slice();

if(compareArr.sort((a, b) => a - b).join() === input.join()) console.log("ascending");
else if(compareArr.sort((a, b) => b - a).join() === input.join()) console.log("descending");
else console.log("mixed");

// 처음 짠 로직
// let result = 0;

// for(let i = 0; i < input.length - 1; i++){
//   if(input[i] + 1 === input[i + 1]) result ++;
//   else if(input[i] === input[i + 1] + 1) result --;
// }

// if(result === 7) console.log("ascending");
// else if(result === -7) console.log("descending");
// else console.log("mixed");