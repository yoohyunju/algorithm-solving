function solution(arr) {
  // let answer = 0;
  // let sum = arr.reduce((pre, cur) => pre + cur);
  // answer = sum / arr.length;
  
  // return answer;

  // 리팩토링
  return arr.reduce((pre, cur) => pre + cur)/arr.length
}