function solution(quiz) {
    let answer = [];
    
    for(let i of quiz) {
        let expression = i.split(' ');
        let operand1 = Number(expression[0]);
        let operand2 = Number(expression[2]);
        let result = Number(expression[4]);
        
        if(i.includes("+")) {
            operand1 + operand2 === result ? answer.push("O") : answer.push("X");
        }else {
            operand1 - operand2 === result ? answer.push("O") : answer.push("X");
        }
        
    }
    
    return answer;
}