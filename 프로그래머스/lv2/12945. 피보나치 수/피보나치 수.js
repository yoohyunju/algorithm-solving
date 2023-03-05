function solution(n) {
    let memo = [];
    
    for(let i = 0; i <= n; i++) {
        if(i === 0) memo.push(0);
        if(i === 1) memo.push(1);
        else if(i >= 2) memo.push((memo[i-1] + memo[i-2]) % 1234567);
    }
    
    return memo[n];
}

// let memo = [0, 1];

// function solution(n) {
//     if(n >= memo.length)
//         memo.push(solution(n-1) + solution(n-2));
    
//     return memo[n];
// }