function solution(num, k) {
    const answer = String(num).split('').indexOf(String(k));

    return answer > -1 ? answer + 1: answer;
}