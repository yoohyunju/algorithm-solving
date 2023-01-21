function solution(A, B) {
    let answer = 0;
    let arrA = A.split('');
    
    if(A === B) return answer;
    
    for(let i = 0; i < A.length; i++) {
        arrA.unshift(arrA.pop());
        
        if(arrA.join('') === B) {
            answer = i + 1;
            break;
        }
    }

    return answer === 0 ? -1 : answer;
}