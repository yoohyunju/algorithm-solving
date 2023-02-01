function solution(lottos, win_nums) {
    let count = 0;
    let zero = 0;
    
    if(lottos.every(e => e === 0)) {
        return [1, 6];
    }
    
    for(let i = 0; i < win_nums.length; i++) {
        if(lottos.includes(win_nums[i])) {
            count++;
        }
        if(lottos[i] === 0) {
            zero++;
        }
    }
       
    return [winTest(count + zero), winTest(count)];
}

function winTest(wins) {
    let rank = 0;
    
    switch (wins) {
        case 6: rank = 1;
            break;
        case 5: rank = 2;
            break;
        case 4: rank = 3;
            break;
        case 3: rank = 4;
            break;
        case 2: rank = 5;
            break;
        default: rank = 6;
    }
    
    return rank;
}