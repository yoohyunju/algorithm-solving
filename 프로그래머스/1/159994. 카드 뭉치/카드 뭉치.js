function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let [card1, card2] = [0, 0];
    
    goal.forEach((el, idx) => {
        if(cards1[card1] === el) {
            card1 ++;
        }else if(cards2[card2] === el) {
            card2 ++;
        }else {
            answer = 'No';
        }
    })
    
    return answer;
}