function solution(price, money, count) {
  for (let i = 0; i <= count; i++) {
    money -= price * i;
  }

  return money > 0 ? 0 : Math.abs(money);
}