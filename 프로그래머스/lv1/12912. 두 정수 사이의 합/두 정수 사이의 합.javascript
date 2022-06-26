function solution(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let result = 0;
    
    if(a === b) return a; // 수가 같은 경우 아무 수나 리턴
    for(let i = min; i <= max; i++){
        result += i;
    }
    
    return result;
    
    // 재귀로 풀면 런타임 에러
    // else if(a !== b) return min + solution(min + 1, max);
}