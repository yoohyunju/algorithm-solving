function solution(board, moves) {
    let answer = 0;
    const basket = [];
    
    for(let move of moves) {
        for(let line of board) {
            if(line[move - 1] === 0) {
                continue;
            } else {
                if(basket.at(-1) === line[move - 1]) {
                    basket.pop();
                    answer += 2;
                } else {
                    basket.push(line[move - 1])
                };
                
                line[move - 1] = 0;
                break;
            }
            
        }
    }
    
    return answer;
}