function solution(polynomial) {
    let arr = polynomial.split(' + ');
    let coef = 0;
    let constant = 0;
    let answer = '';
    
    for(let i of arr) {
        if(i.includes('x')) {
            i === 'x' ? coef += 1 : coef += parseInt(i);
        } else {
            constant += parseInt(i);
        }
    }
    
    if(coef === 0) {
        answer = `${constant}`;
    } else if(constant === 0) {
        answer = coef === 1 ? `x` : `${coef}x`;
    } else {
        answer = coef === 1 ? `x + ${constant}` : `${coef}x + ${constant}`;
    }
    
    return answer;
}