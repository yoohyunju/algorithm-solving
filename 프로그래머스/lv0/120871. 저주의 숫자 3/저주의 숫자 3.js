function solution(n) {
    let count = 0;
    
    for(let i = 1; i <= 300; i++) {
        if(i % 3 !== 0 && !`${i}`.includes(3)) count++;
        if(count === n) return i;
    }
}
