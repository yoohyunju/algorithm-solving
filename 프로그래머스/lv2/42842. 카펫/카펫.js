function solution(brown, yellow) {
    let blocks = brown + yellow;
    let width = 0;
    
    for(let i = 3; i <= blocks / i; i++) {
        let heigth = i;
        width = Math.floor(blocks / i);
        
        if((width - 2) * (heigth - 2) === yellow) {
            return [width, heigth];
        }
    }
    
    return;
}
