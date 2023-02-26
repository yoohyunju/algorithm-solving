function solution(food) {
    let answer = '';
    
    for(let i = 1; i < food.length; i++) {
        let foodNum = Math.floor(food[i] / 2);
        
        for(let j = 0; j < foodNum; j++) {
            answer += i;
        }
    }
    
    answer += '0' + answer.split('').reverse().join('');
    
    return answer;
}