function solution(array, n) {
    array.sort((a, b) => a - b);
    const arr = array.map(e => Math.abs(e - n));
    let idx = 0;
    let min = arr[0];
    
    for(let i = 0; i < array.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    
    return array[idx];
}