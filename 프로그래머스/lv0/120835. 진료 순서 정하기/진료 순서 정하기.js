function solution(emergency) {
    let obj = {};
    let priority = 1;
    let copy = Array.from(emergency);
    
    copy.sort((a, b) => b - a);
    
    for(let i of copy) {
        obj[i] = priority++;
    };
    
    return emergency.map(e => obj[e]);
}