function solution(common) {
    let answer = [];
    
    for(let i = 0; i < common.length - 1; i++) {
        answer.push(common[i+1] - common[i]);
    }
    
    const [cur, next] = [answer[0], answer[1]];
    const lastNum = common[common.length - 1];
    
    return cur === next ? lastNum + cur : lastNum * (next / cur);
}