const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const vowels = ["a", "e", "i", "o", "u"];

input.forEach((line) => {
  if (line[0] === "#") return;

  const lineArr = line.toLocaleLowerCase().split("");
  const vowelCount = lineArr.filter((i) => vowels.includes(i)).length;
  console.log(vowelCount);
});
