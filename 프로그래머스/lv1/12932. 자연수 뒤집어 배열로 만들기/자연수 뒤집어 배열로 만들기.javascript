function solution(n) {
    let arr = String(n).split('')
    let newArr = [];
    
    for(let i of arr){
        newArr.push(Number(i));
    }
    
    return newArr.reverse();
}