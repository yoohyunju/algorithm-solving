function solution(arr, k) {
    return k % 2 === 1 ? arr.map(i => i * k) : arr.map(i => i + k);
}