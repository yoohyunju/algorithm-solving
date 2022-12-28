function solution(n, k) {
    return n.toString(k).split('0').filter(e => isPrime(e)).length;
}

function isPrime(p) {
    if(p < 2) return false;
    
    for(let i = 2; i <= Math.sqrt(p); i++) {
        if(p % i === 0) return false;
    }
    
    return true;
}