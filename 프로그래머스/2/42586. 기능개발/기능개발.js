function solution(progresses, speeds) {
    let p = [...progresses]
    let s = [...speeds]
    const answer = []
    
    while(p.length) {
        p = p.map((i, idx) => i + s[idx])
        
        if(p[0] >= 100) {
            let deployableCnt = 0
            
            for(let i = 0; i < p.length; i++) {
                if(p[i] >= 100) {
                    deployableCnt ++
                } else {
                    break
                }
            }
            answer.push(deployableCnt)
            p.splice(0, deployableCnt)
            s.splice(0, deployableCnt)
        }
    }
    
    return answer
}