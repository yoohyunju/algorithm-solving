function solution(my_string) {
    const set = new Set();
    
    for(let i of my_string) {
        set.add(i);
    }
    
    return Array.from(set).join('');
}