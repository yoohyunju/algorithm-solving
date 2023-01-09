function solution(my_string) {
    let answer = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        let num = '';
        while(Number.isInteger(parseInt(my_string[i]))) {
            num += my_string[i];
            i++;
        }
        answer += +num;
    }
    
    return answer;
}