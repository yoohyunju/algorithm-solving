function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >= 10) {
        let temp = Math.floor(coupon / 10);
        service += temp;
        coupon = temp + coupon % 10;
    }
    
    return service;
}