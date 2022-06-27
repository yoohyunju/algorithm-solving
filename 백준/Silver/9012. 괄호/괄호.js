const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = input[0]; // 입력 데이터 수

const func = (input) => {
  let stack = [];

  for (let i of input) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) { // ())) 인 경우 (예외 케이스)
        return "NO";
      }
      stack.pop();
    }
  }

  if (stack.length === 0) { // 짝이 잘 맞으면 스택 비어있음
    return "YES";
  } else { // 짝이 안맞으면 괄호 남아있음
    return "NO";
  }
};

// 입력데이터 수 만큼 출력
for (let i = 1; i <= T; i++) {
  console.log(func(input[i]));
}