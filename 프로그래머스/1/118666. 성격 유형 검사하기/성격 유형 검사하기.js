function solution(survey, choices) {
    const result = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    const types = ['RT', 'CF', 'JM', 'AN']
    
    survey.forEach((types, idx) => {
        const score = choices[idx] - 4
        
        if(score !== 0) {
            const choicedType = score < 0 ? types[0] : types[1]
            result[choicedType] += Math.abs(score)
        }
    })
    
    return types.map(([a, b]) => result[a] >= result[b] ? a : b).join('')
}
