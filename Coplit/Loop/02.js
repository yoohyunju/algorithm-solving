function sumTo(num) {
    let result = 0;

    for(let i = 0; i <= num; i++){
        result += i;
    }
    return result;

    // 재귀로 푸는 법
    // if(num === 0) return 0;
    // return num + sumTo(num - 1)
}