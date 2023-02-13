function solution(strings, n) {
    const answer = strings.sort((a, b) => {
        if(a.charCodeAt(n) - b.charCodeAt(n) === 0) {
            return a > b ? 1 : -1;
        } else {
            return a.charCodeAt(n) - b.charCodeAt(n);
        }
    });
    
    return answer;
}