function solution(n, t) {
    return (t === 0) ?  n : solution(n, t - 1) * 2;
}
