function solution(my_string) {
    return my_string.match(/[\d]/g).map(e => Number(e)).sort((a, b) => a - b);
}