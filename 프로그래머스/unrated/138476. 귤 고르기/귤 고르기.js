function solution(k, tangerine) {
    let answer = 0;
    const sizeType = {};
    
    for(let i of tangerine) {
        sizeType[i] = (sizeType[i] || 0) + 1;
    }
    
    const countArr = Object.values(sizeType);
    
    countArr.sort((a, b) => b - a);
    
    for(const i of countArr) {
        answer++;
        if (k > i) k -= i;
        else break;
    }
    
    return answer; 
}