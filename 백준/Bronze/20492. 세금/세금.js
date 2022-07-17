const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 전체 상금의 22%를 제세공과금으로 납부하는 경우
// 상금의 80%를 필요 경비로 인정받고, 나머지 금액 중 22%만을 제세공과금으로 납부하는 경우

const case1 = input - input * 0.22;
const case2 = input - input * 0.2 * 0.22;

console.log(`${case1} ${case2}`);