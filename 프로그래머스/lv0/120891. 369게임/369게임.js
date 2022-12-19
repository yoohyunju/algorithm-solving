function solution(order) {
    return String(order).split('').filter(e => e === '3' || e === '6' || e === '9').length;
}