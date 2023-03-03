function solution(arr1, arr2) {
    let answer = [];
    let len1 = arr1.length;
    let len2 = arr2.length;
    
    for(let i = 0; i < len1; i++) {
        let tempArr = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let temp = 0;
            
            for(let k = 0; k < len2; k++) {
                temp += arr1[i][k] * arr2[k][j];
            }
            tempArr.push(temp);
        }
        answer.push(tempArr);
    }
    
    return answer;
}
