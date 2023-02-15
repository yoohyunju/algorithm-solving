function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        let line = (arr1[i] | arr2[i]).toString(2).padStart(n, 0).replaceAll("0", " ");
        answer.push(line.replaceAll("1", "#"));
    }
    
    return answer;
}