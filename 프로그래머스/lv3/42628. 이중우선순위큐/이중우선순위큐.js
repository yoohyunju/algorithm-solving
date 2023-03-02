function solution(operations) {
    let answer = [];
    
    for(let i = 0; i < operations.length; i++) {
        let [operation, num] = operations[i].split(' ');
        
        if(operation === 'I') {
            answer.push(+num);
        } else {
            num === "1" ? 
                answer.splice(answer.indexOf(Math.max(...answer)), 1)
              : answer.splice(answer.indexOf(Math.min(...answer)), 1)
            
        }
    }
    
    return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}