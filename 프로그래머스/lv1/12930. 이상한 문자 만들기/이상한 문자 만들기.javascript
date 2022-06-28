function solution(s) {
  return s.split(" ")
      .map((word) =>
           word.split("")
           .map((char, index) =>
                index % 2 === 0 ? word[index].toUpperCase() : word[index].toLowerCase()
               ).join("")
          ).join(" ");
}

/* 열심히 풀었는데 테케 통과가 안됨...
let answer = '';

function solution(s) {
    
    let arr = s.split(" ");
    
    for(let i of arr){
        factory(i);
    }
    
    return answer.trim();
}

const factory = (word) => {
    
    for(let j = 0; j < word.length; j++){
        answer = j % 2 === 0 ? answer += word[j].toUpperCase() : answer += word[j];
    }
    
    return answer += " ";
}
*/