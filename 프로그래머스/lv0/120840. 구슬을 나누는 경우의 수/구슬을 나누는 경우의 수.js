const fac = (num) => num === 0 ? 1 : num * fac(num - 1)

function solution(balls, share) {
  return Math.round(fac(balls) / fac(balls - share) / fac(share))
}

