function solution(i, j, k) {
    let answer = 0;
    
    for(let s = i; s <= j; s ++) {
        answer += s.toString().split('').filter(e => e === k + '').length;
    }
    
    return answer;
}