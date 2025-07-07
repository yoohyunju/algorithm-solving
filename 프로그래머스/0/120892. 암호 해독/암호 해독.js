function solution(cipher, code) {
    return cipher.split('').filter((i, idx) => (idx + 1) % code === 0).join('')
}