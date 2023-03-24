function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for(let i of ingredient) {
        stack.push(i);
        
        if(stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}

/*
function solution(ingredient) {
    let answer = 0;
    let all = ingredient.join('');

    while(all.includes('1231')) {
        all = all.replace('1231', '');
        answer++;
    }
    
    return answer;
}
*/