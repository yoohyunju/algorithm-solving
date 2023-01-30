function solution(dots) {
    const arr = [];

    for(let i = 0; i < dots.length; i ++) {
        for(let j = i+1; j < dots.length; j ++) {
            const gradient = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            
            if(arr.includes(gradient)) return 1;
            arr.push(gradient);
        }
    }
    
    return 0;
}