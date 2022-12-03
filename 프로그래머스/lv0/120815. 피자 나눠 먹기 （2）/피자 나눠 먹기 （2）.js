function solution(n) {
    let lcm = n * 6 / gcd(n, 6);
    
    return lcm / 6;
}

function gcd(a, b) {
    if(b === 0) return a;
    return gcd(b, a % b);
}