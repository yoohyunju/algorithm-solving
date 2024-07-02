function solution(num_list) {
    let odd = ''
    let even = ''
    
    num_list.forEach(item => item % 2 !== 0 ? odd += item : even += item)
    
    return Number(odd) + Number(even)
}