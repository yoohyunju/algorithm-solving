function solution(d, budget) {
    let answer = 0;
    let count = 0;
    
    d.sort((a, b) => a - b);

    for(let i of d) {
        answer += i;
        if(answer > budget) break;
        count ++;
    }
    
    return count;
}