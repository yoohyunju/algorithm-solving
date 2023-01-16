function solution(expression) {
    let result = [];
    let priorities = [["*", "+", "-"], ["*", "-", "+"], 
                      ["+", "*", "-"], ["+", "-", "*"], 
                      ["-", "*", "+"], ["-", "+", "*"]];
    
    for(let priority of priorities) {
        // 숫자가 아닌 것 즉, 연산자를 기준으로 split
        const temp = expression.split(/(\D)/);
        for(let prior of priority) {
            while(temp.includes(prior)) { // 식에 연산자가 포함되어 있으면
                const idx = temp.indexOf(prior); // 연산자의 인덱스를 찾음
                // 연산자 앞 숫자부터 시작해서 3개를 잘라내고 잘라낸 자리에 계산된 값으로 대체
                // slice 하고 나서 join('')으로 식을 합쳐줌
                temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')));
            }
        }
        result.push(Math.abs(temp));
    }
    
    return Math.max(...result);
}