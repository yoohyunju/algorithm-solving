function solution(s) {
    let answer = s;
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numbers.map((e, idx) => {
        if(answer.includes(e)) {
            answer = answer.replaceAll(e, idx);
        }
    })
    
    return +answer;
}