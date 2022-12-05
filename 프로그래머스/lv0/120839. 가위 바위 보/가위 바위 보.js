function solution(rsp) {
    let answer = "";
    
    rsp.split('').forEach(e => {
        switch(e) {
            case "2":
                answer += 0;
                break;
            case "0":
                answer += 5;
                break;
            case "5":
                answer += 2;
                break;
        }
    });
    
    return answer;
}