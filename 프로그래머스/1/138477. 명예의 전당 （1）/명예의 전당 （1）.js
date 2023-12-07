function solution(k, score) {
    const answer = [];
    const rank = [];
    
    score.forEach((s) => {
        if(rank.length < k) {
            rank.push(s)
        } else {
            rank.forEach(r => {
                if(r <= s) {
                    rank.pop()
                    rank.push(s)
                }
            })
        }
        rank.sort((a, b) => b - a)
        answer.push(rank.at(-1))
    })
    
    return answer;
}