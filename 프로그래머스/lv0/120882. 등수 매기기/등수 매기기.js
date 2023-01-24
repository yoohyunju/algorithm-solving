function solution(score) {
    let answer = [];
    let avg = [];
    let rank = {};

    for(i of score) {
        avg.push((i[0] + i[1]) / 2);
    }
    
    const sortedAvg = [...avg].sort((a, b) => b - a);
    
    for(let i = 0; i < sortedAvg.length; i++) {
        if(!rank[sortedAvg[i]]) {
            rank[sortedAvg[i]] = i + 1;
        }
    }
    
    for(let i = 0; i < avg.length; i++) {
        answer.push(rank[avg[i]]);
    }
    
    return answer;
}