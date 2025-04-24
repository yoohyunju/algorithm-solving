function solution(a, b) {
    const weeks = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const days = months.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b
    
    return weeks[days % 7]
}