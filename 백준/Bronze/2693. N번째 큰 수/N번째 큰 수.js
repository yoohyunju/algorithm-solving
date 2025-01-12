const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input
  .slice(1)
  .map((nums) => console.log(nums.split(" ").sort((a, b) => b - a)[2]));