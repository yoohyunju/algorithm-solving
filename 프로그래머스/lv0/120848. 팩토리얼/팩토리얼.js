function solution(n) {
    let acc = 1;
    
    for(let i = 1; i < n + 2; i++){
        acc *= i;
        
        if(n < acc) {
            return i - 1;
        }
    }
}