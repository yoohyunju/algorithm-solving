function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        let line = (arr1[i] | arr2[i]).toString(2).padStart(n, 0).replace(/1|0/g, e => +e ? '#' : ' ');
        answer.push(line);
    }
    
    return answer;
}