const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n")
const A = input[1].split(" ").map((i) => Number(i))
const B = [...A]

B.sort((a, b) => a - b)
const answer = A.map((i) => {
  const matchIdx = B.indexOf(i)
  B[matchIdx] = 0
  return matchIdx
})

console.log(...answer)
