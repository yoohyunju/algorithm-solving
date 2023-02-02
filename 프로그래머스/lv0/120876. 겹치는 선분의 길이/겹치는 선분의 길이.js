function solution(lines) {
    let obj = {};
    
    for(let i = 0; i < lines.length; i++) {
        let [start, end] = lines[i];
        for(let j = start; j < end; j++) {
            obj[[j, j+1]] = (obj[[j, j+1]] || 0) + 1;
        }
    }
    
    
    return Object.values(obj).filter(e => e >= 2).length;
}