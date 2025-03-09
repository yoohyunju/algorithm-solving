function solution(num_list) {
    const { odd, even } = num_list.reduce((acc, num) => {
        num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num)
        return acc
    }, { odd: [], even: [] })
    
    return Number(odd.join('')) + Number(even.join(''))
}