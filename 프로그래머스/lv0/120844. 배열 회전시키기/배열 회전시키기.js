function solution(numbers, direction) {
    let answer = [];
    
    if(direction === "right") {
        answer.push(numbers[numbers.length - 1]);
        answer.push(...numbers.slice(0, numbers.length - 1));
    } else {
        answer.push(...numbers.slice(1));
        answer.push(numbers[0]);
    }

    return answer;
}