function solution(n) {
    let temp = n + 1;
    const nNum = n.toString(2).replaceAll(0,'').length;
    
    while(true) {
        let tempNum = temp.toString(2).replaceAll(0,'').length;
        if(nNum === tempNum) return temp;
        temp++;
    }
}