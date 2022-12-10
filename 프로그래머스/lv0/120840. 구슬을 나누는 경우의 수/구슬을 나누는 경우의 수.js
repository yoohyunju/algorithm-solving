function fac(n) {
    let result = BigInt(n);
    
    for(let i = 1; i < n; i++) {
       result *= BigInt(n - i);
    }
    
    return result;
}

function solution(balls, share) {
    if(balls === 1 || balls === share) return 1;
    return fac(balls) / (fac(balls - share) * fac(share));
}

