function solution(rank, attendance) {
    const tempList = []
    const personNumList = []
    
    rank.forEach((item, idx) => attendance[idx] && tempList.push(item))
    const top3List = tempList.sort((a, b) => a - b).slice(0, 3)
    
    top3List.forEach(item => personNumList.push(rank.indexOf(item)))
    const [first, second, third] = personNumList
    
    return 10000 * first + 100 * second + third
}