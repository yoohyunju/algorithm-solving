function solution(numbers, target) {
    let answer = 0;
    
    function DFS(level, sum) {
        if(numbers.length === level) {
            if(sum === target) {
                answer ++;
            }
            return;
        }
        
        DFS(level + 1, sum + numbers[level]);
        DFS(level + 1, sum - numbers[level]);
    }
    
    DFS(0, 0);
    
    return answer;
}