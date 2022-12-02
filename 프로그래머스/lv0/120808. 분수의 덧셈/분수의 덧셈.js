function solution(denum1, num1, denum2, num2) {
    const numerator = denum1 * num2 + denum2 * num1;
    const denominator = num1 * num2;
    const gcd = calcGcd(numerator, denominator);
    
    return [numerator / gcd, denominator / gcd];
}

function calcGcd(a, b) {
    if(b === 0) {
        return a;
    }else {
        return calcGcd(b, a % b);
    }
}