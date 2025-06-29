const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const letterCounts = input.reduce((acc, cur) => {
  const firstLetter = cur[0];
  acc[firstLetter] = (acc[firstLetter] || 0) + 1;

  return acc;
}, {});

const answer = Object.entries(letterCounts)
  .filter(([_, count]) => count >= 5)
  .map(([letter]) => letter)
  .sort()
  .join("");

console.log(answer || "PREDAJA");