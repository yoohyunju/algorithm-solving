function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"]
    
    words.forEach(i => {
        babbling = babbling.map(j => j.replaceAll(i, ' '))
    })
    
    return babbling.filter(i => i.trim().length === 0).length;
}