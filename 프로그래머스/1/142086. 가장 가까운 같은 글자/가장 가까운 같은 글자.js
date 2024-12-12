function solution(s) {
    const targets = []
    const answer = []
    
    Array.from(s).forEach((i, idx) => {
        const nearWordIdx = targets.lastIndexOf(i)
        const distance = nearWordIdx === -1 ? nearWordIdx : idx - nearWordIdx
        
        answer.push(distance)
        targets.push(i)
    })
    
    return answer
}