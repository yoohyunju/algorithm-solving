function solution(before, after) {
    const str1 = before.split('').sort().join();
    const str2 = after.split('').sort().join();
    
    return str1 === str2 ? 1 : 0;
}