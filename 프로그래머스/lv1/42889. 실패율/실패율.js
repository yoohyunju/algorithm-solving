function solution(N, stages) {
    const answer = [];
    const data = [];
    const users = new Array(N + 1).fill(0);
    
    // stage별 사용자 count
    for(let i = 0; i < stages.length; i++) {
        users[stages[i] - 1] ++;
    }
    
    // 스테이지, 실패율 객체를 data 배열에 추가
    for(let i = 0; i < N; i++) {
        let range = users.slice(i);
        let failureRate = users[i] / range.reduce((acc, cur) => acc + cur);
        
        data.push({stage: i+1, rate: failureRate});
    }
    
    // 실패율 기준으로 내림차순 정렬 후 answer에 스테이지 번호 추가
    data.sort((a, b) => b.rate - a.rate);
    data.map(e => answer.push(e.stage));

    return answer;
}
