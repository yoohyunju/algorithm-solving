function solution(s, n) {
    let answer = '';
    const alphabet = s.split('');
    const A = 'A'.charCodeAt();
    const a = 'a'.charCodeAt();
    
    for(let i of alphabet) {
        let code = i.charCodeAt();
        
        if(i === ' ') {
            answer += i;
            continue;
        }
        
        if(i === i.toUpperCase()) {
            answer += String.fromCharCode((code - A + n) % 26 + A);
        } else {
            answer += String.fromCharCode((code - a + n) % 26 + a);
        }
    }
    
    return answer;
}