function solution(n, m) {
    let answer = [];
    
    if(n > m) {
        answer.push(gcd(n, m));
        answer.push(n * m / gcd(n, m));
        
    } else {
        answer.push(gcd(m, n));
        answer.push(n * m / gcd(m, n));
    }
    
    return answer;
}

// 유클리드 호제법
function gcd(a, b) {
    if(b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}