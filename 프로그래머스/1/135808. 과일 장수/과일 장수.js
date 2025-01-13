function solution(k, m, score) {
    let answer = 0
    let box = []
    const sortedScore = score.sort((a, b) => b - a)
    
    sortedScore.forEach(i => {   
        box.push(i)
        if(box.length === m) {
            answer += Math.min(...box) * m
            box = []
        }
    })
    
    return answer
}
