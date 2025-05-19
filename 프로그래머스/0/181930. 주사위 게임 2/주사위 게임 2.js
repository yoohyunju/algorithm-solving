function solution(a, b, c) {
    const uniqueCnt = [...new Set([a, b, c])].length
    const sumOfNums = a + b + c
    const sumOfSquares = a ** 2 + b ** 2 + c ** 2
    const sumOfCubes = a ** 3 + b ** 3 + c ** 3
    
    switch (uniqueCnt) {
        case 1:
            return sumOfNums * sumOfSquares * sumOfCubes
        case 2:
            return sumOfNums * sumOfSquares
        case 3:
            return sumOfNums
    }
}