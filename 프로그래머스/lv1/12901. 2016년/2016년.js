function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let sum = 0;
    
    for(let i = 0; i < a - 1; i++) {
        sum += month[i];
    }
    
    return week[(sum + b - 1) % 7];
}