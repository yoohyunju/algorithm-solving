function solution(answers) {
    let answer = [];
    let max = 0;
    let arr = [0, 0, 0];
    const 수포자1 = [1, 2, 3, 4, 5];
    const 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === 수포자1[i % 수포자1.length]) arr[0]++;
        if(answers[i] === 수포자2[i % 수포자2.length]) arr[1]++;
        if(answers[i] === 수포자3[i % 수포자3.length]) arr[2]++;
    }

    max = arr[0];
    answer.push(1);
    
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            answer[0] = i + 1;
            max = arr[i];
        } else if(max === arr[i]) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}
