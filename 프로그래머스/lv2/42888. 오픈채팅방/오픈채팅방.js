function solution(record) {
    let answer = [];
    let state, uid, nickname;
    
    const map = new Map();
    
    for(i in record) {
        [state, uid, nickname] = record[i].split(" ");
        
        if(state !== "Leave"){
            map.set(uid, nickname);
        }
    }
    
    for(i in record) {
        [state, uid, nickname] = record[i].split(" ");
        
        if(state === "Enter") {
            answer.push(`${map.get(uid)}님이 들어왔습니다.`);
        }else if(state === "Leave") {
            answer.push(`${map.get(uid)}님이 나갔습니다.`);
        }
    }
    
    return answer;
}