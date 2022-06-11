function solution(x) {

  // 방법 1. 숫자를 문자로 바꿔서 자릿수를 누적한다. (이 방법이 더 빠름)
  // let num = x;
  // let sum = 0;

  // do {
  //     sum += x % 10;
  //     x = Math.floor(x / 10);
  // } while (x>0);

  // return !(num % sum);

  // 방법 2. 반복해서 10으로 나눠 나머지를 누적한다.
  let sum = 0;
  let str = String(x).split("");

  str.map((el) => {
    sum += Number(el);
  });

  return x % sum === 0 ? true : false;
}