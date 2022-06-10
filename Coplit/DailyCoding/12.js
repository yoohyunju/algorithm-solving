function findBugInApples(arr) {
  /*
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 'B') {
        return [i, j];
      }
    }
  }
  */

  // 리팩토링 코드
  const answer = [];

  arr.forEach((v, i) => {
    v.includes("B") ? (answer.push(i), answer.push(v.indexOf("B"))) : null;
  });
  
  return answer;
}
