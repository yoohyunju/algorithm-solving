function solution(num_list) {
    const [beforeNum, lastNum] = num_list.slice(-2)
    return [...num_list, lastNum > beforeNum ? lastNum - beforeNum : lastNum * 2]
}