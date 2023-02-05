function solution(number) {
    let len = number.length;
    let count = 0;
    
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            for(let k = j + 1; k < len; k++) {
                let comb = number[i] + number[j] + number[k];
                if(comb === 0) count ++;
            }
        }
    }
    
    return count;
}