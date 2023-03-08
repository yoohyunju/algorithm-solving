function solution(n, m, section) {
    let answer = 0;
    let paintedArea = 0;
    
    section.forEach((s) => {
        if (s > paintedArea) {
            answer++;
            paintedArea = s + m - 1;
        }
    });

    return answer;
}
