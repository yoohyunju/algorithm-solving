function isCorrectBracket(arr) {
    let stack = [];
    const reg = /\[|\{|\(/;
    
    for(let i = 0; i < arr.length; i++) {
        if(reg.test(arr[i])) {
            stack.push(arr[i]);
        } else {
            switch(stack[stack.length - 1]) {
                case '[':
                    if(arr[i] === ']') stack.pop();
                    break;
                case '{':
                    if(arr[i] === '}') stack.pop();
                    break;
                case '(':
                    if(arr[i] === ')') stack.pop();
                    break;
                default :
                    return false;
            }
        }
    }
    
    return stack.length === 0 ? true : false;
}

function solution(s) {
    let answer = 0;
    let arr = s.split('');
    
    for(let i = 0; i < s.length; i++) {
        arr.push(arr.shift());
        if(isCorrectBracket(arr)) {
            answer++;
        }
    }
    
    return answer;
}
