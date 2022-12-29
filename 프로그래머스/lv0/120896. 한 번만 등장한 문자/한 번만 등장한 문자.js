function solution(s) {
    let obj = {};
    let answer = '';
    
    for(let i of s) {
        obj[i] = (obj[i] || 0) + 1;
    }
    
    for(let i in obj) {
        if(obj[i] === 1) answer += i;
    }
    
    return answer.split('').sort().join('');
}