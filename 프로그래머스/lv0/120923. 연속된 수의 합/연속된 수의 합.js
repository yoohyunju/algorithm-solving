function solution(num, total) {
    let answer = [];
    let sum = 0;
    
    for(let i = 1; i < num; i++) {
        sum += i;
    }
    
    const firstNum = (total - sum) / num;
    
    for(let i = firstNum; i < firstNum + num; i++) {
        answer.push(i);
    }
    
    return answer;
}