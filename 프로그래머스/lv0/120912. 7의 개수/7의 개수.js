function solution(array) {
    let answer = 0;
    
    for(let i of array) {
        answer += i.toString().split('').filter(e => e === '7').length;
    }
    
    return answer;
}