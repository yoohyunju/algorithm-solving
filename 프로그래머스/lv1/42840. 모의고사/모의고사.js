function solution(answers) {
    let answer = [];
    let [a, b, c] = [0, 0, 0];
    const 수포자1 = [1, 2, 3, 4, 5];
    const 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === 수포자1[i % 수포자1.length]) a++;
        if(answers[i] === 수포자2[i % 수포자2.length]) b++;
        if(answers[i] === 수포자3[i % 수포자3.length]) c++;
    }

    let max = Math.max(a, b, c);

    if (a === max) answer.push(1);
    if (b === max) answer.push(2);
    if (c === max) answer.push(3);
    
    return answer;
}
