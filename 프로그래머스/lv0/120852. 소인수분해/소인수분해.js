function solution(n) {
    let answer = new Set([]);
    
    return factorization(n, answer);
}

function factorization(n, arr) {
    let i = 2;
    let remainder = n;
    
    while(i <= n) {
        if(remainder % i === 0) {
            arr.add(i);
            remainder /= i;
        } else {
            i++;
        }
    }
    
    return Array.from(arr);
}