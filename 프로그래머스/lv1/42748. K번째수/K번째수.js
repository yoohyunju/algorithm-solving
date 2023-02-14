function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let command = commands[i];
        const [start, end, k] = command;
        let arr = array.slice(start - 1, end);
        
        answer.push(arr.sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}