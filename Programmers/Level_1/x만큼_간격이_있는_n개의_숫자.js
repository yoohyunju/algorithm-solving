function solution(x, n) {
  let answer = [];

  for(let i=x; answer.length < n; i+=x){
    answer.push(i);
  }

  return answer;
}

/* 다른 풀이
return Array(n).fill(x).map((v, i) => (i + 1) * v)

ex) solution(2, 5)
  Array(n).fill(x) -> [2, 2, 2, 2, 2] (길이 n의 배열을 x로 채움)

  .map((v, i) => (i + 1) * v) -> v: 현재 값, i: 인덱스
  (0+1) * 2 = 2
  (1+1) * 2 = 4
  (2+1) * 2 = 6
  (3+1) * 2 = 8
  (4+1) * 2 = 10
*/