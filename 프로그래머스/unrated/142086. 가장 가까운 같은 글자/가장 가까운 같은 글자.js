function solution(s) {
    let answer = [];
    let tempArr = [];
    
    for(let i = 0; i < s.length; i++) {
        let idx = tempArr.lastIndexOf(s[i]);
        idx === -1 ? answer.push(-1) : answer.push(i - idx);
        tempArr.push(s[i]);
    }
    
    return answer;
}