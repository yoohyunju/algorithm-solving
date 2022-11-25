function solution(price) {
    let answer = price;
    
    if(price >= 100000 && price < 300000) {
        answer = calc(price, 0.05);
    } else if(price >= 300000 && price < 500000) {
        answer = calc(price, 0.1);
    } else if(price >= 500000){
        answer = calc(price, 0.2);
    }

    return answer;
}

function calc(price, rate) {
    return Math.floor(price - price * rate);
}