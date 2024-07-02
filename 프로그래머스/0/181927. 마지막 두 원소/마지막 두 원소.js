function solution(num_list) {
    const [beforeEl, lastEl] = num_list.slice(-2)
    const newEl = lastEl > beforeEl ? lastEl - beforeEl : lastEl * 2
    num_list.push(newEl)
    
    return num_list
}