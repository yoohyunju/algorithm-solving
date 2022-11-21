function solution(money) {
    let cup = Math.floor(money / 5500);

    return [cup, money - cup * 5500];
}