function solution(s) {
    let answer = '';
    let center = (s.length - 1) / 2;
    
    answer = s.length % 2 === 0 ? s.slice(center, center + 2) : s.slice(center, center + 1);
    
    return answer;
}