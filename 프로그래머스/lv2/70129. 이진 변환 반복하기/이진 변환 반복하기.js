function solution(s) {
    let count = 0;
    let zeroNum = 0;
    let str = s;
    
    while(str !== "1") {
        let strLen = str.length;
        
        count++;
        str = str.replaceAll("0", '');
        
        zeroNum += strLen - str.length;
        str = (str.length).toString(2);
    }

    return [count, zeroNum];
}