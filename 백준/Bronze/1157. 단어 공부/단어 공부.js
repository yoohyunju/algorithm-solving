const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase().split('');

let obj = {};
let max = 0;
let result = '';

for(let i = 0; i < input.length; i++) {
  obj[input[i]] = (obj[input[i]] || 0) + 1;
}

for(key in obj){
  if(max < obj[key]) { // 최대값을 가진 key 찾기
    max = obj[key];
    result = key;
  } else if(max === obj[key]) { // 최대값을 가진 중복 key 찾기
    result = '?';
  }
}

console.log(result);