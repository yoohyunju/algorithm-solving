function solution(arr, divisor) {
    let answer = [];
    
    answer = arr.filter(e => e % divisor === 0).sort((a, b) => a - b);
    if(answer.length === 0) answer = [-1];
    
    return answer;
}