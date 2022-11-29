function solution(my_string) {
    return my_string.split('')
        .map(e => Number(e))
        .filter(e => Number.isInteger(e))
        .reduce((acc, cur) => acc + cur);
}