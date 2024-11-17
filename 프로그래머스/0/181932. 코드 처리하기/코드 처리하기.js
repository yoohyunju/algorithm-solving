function solution(code) {
    const codeList = Array.from(code)
    const answer = []
    let mode = false

    codeList.forEach((i, idx) => {
        if(i === '1') {
            mode = !mode
        } else {
            if(!mode && idx % 2 === 0 || mode && idx % 2 !== 0) {
                answer.push(i)
            }
        }
    })
    
    return !answer.length ? 'EMPTY' : answer.join('')
}