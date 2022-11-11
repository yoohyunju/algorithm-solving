function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let result = 0;

    for (let j = 0; j <= i; j++) {
      if (i % j === 0) ++result;
    }

    result % 2 === 0 ? (sum += i) : (sum -= i);
  }

  return sum;
}