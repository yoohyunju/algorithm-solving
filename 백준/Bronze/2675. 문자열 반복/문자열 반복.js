const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0];

for(let i = 1; i <= T; i++) {
  let result = '';
  const [R, S] = input[i].split(' ');
  
  for(let j = 0; j < S.length; j++) {
    result += S[j].repeat(R);
  }
  
  console.log(result)
}
