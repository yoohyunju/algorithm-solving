function solution(a, b, n) {
    let answer = 0;
    
    function calc(n, answer) {
        let cola = Math.floor(n / a) * b;
        
        if(n < a) return answer;
        
        answer += cola;
        
        return calc(cola + n % a, answer);
    }
    
    return calc(n, answer);
}