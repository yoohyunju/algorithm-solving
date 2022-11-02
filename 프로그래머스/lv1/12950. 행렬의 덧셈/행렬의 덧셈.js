function solution(arr1, arr2) {
    const answer = [];
    
    arr1.forEach((row, rowIdx) => answer.push(row.map((col, colIdx) => col + arr2[rowIdx][colIdx])));
    
    return answer;
}