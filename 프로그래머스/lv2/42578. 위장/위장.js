function solution(clothes) {
    let answer = 1;
    
    const map = new Map();
    
    for(const cloth of clothes){
        map.set(cloth[1], (map.get(cloth[1]) || 1) + 1); // 안 입는 경우도 포함
    }
    
    for(const value of map.values()) {
        answer *= value;
    }
    
    return answer - 1; // 아무것도 안 입는 경우 제외
}