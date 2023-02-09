function solution(s, skip, index) {
    let answer = '';
    let refineStr = '';

    for(let i = 97; i <= 122; i++) {
        let alphabet = String.fromCharCode(i);
        
        if(!skip.includes(alphabet)) {
            refineStr += alphabet;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        let cipherIdx = (refineStr.indexOf(s[i]) + index) % refineStr.length;
        
        answer += refineStr[cipherIdx];
    }
    
    return answer;
}