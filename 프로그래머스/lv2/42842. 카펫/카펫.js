function solution(brown, yellow) {
    const blocks = brown + yellow;
    let divisors = [];
    
    for(let i = 1; i <= blocks; i++) {
        if(blocks % i === 0) divisors.push(i);
    }

    let median = Math.floor(divisors.length / 2);
    let i = median;
    let j = median - 1;
    
    while(true) {
        if(divisors.length % 2 === 0) {
            if((divisors[i] - 2) * (divisors[j] - 2) === yellow) {
                return [divisors[i], divisors[j]]
            } else {
                i++;
                j--;
            }
        } else {
            return [divisors[median], divisors[median]];
        }
    }
}
