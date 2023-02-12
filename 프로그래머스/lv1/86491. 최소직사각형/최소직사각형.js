function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i].sort((a, b) => a - b);
        
        if(w > maxW) maxW = w;
        if(h > maxH) maxH = h;
    }
    
    return maxW * maxH;
}