function solution(s) {
    const arr = s.split(" ").map(e => parseInt(e));

    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}