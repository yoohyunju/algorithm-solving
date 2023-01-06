function solution(numbers) {
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let arr = numbers;
    
    for(let i = 0; i < number.length; i++) {
        arr = arr.replaceAll(number[i], i);
    }
    
    return parseInt(arr);
}