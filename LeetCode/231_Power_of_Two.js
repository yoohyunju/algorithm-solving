let isPowerOfTwo = function(n) {
    if(n < 1 || Math.floor(n) !== n) return false;
    else if(n === 1) return true;
    else return isPowerOfTwo(n/2);
};

// 종료 조건 : 2의 제곱이 아니게 되는 조건을 만났을 때.
// 2의 제곱이 아니게 되는 조건 : n을 2로 계속해서 나눴을 때 소수이거나 1보다 작으면 2의 제곱이 아님.
// ex) 5를 2로 나누면 2.5