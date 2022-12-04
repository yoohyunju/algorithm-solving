function solution(n, t) {
    //     let answer = n;

    //     for(let i = 0; i < t; i++) {
    //         answer *= 2;
    //     }

    //     return answer;
    
    return (t === 0) ?  n : solution(n, t - 1) * 2;
}
