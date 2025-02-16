function solution(my_string, num1, num2) {
    const tempStr = [...my_string]
    
    tempStr.splice(num1, 1, my_string[num2])
    tempStr.splice(num2, 1, my_string[num1])
    
    return tempStr.join('');
}