function solution(k, tangerine) {
    let answer = 0;
    const sizeType = {};
    
    for(let i of tangerine) {
        sizeType[i] = (sizeType[i] || 0) + 1;
    }
    
    const countArr = Object.values(sizeType);
    
    countArr.sort((a, b) => b - a);
    
    if(countArr[0] >= k) {
        answer = 1;
    } else {
        let sum = 0;
        for(let i = 0; i < countArr.length; i++) {
            sum += countArr[i];
            if(sum >= k) {
                answer = i + 1;
                break;
            }
        }
    }
    
    return answer;
}