function solution(array, height) {
    let count = 0;
    
    array.forEach(e => {
        if(e > height) count ++;
    })
    
    return count;
}