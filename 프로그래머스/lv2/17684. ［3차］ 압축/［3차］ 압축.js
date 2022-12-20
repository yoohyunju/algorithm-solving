function solution(msg) {
    let idxArr = [];
    let dic = {};
    
    // 사전 초기화 (A ~ Z)
    for(let i = 0; i < 26; i++) {
        dic[String.fromCharCode(65 + i)] = i + 1;
    }
    
    let idx = 0;
    
    while(idx < msg.length) {
        let word = '';
        
        // 가장 긴 문자열 탐색
        while(dic[word + msg[idx]]) {
            word += msg[idx];
            idx ++;
        }
        // 색인 번호 추가
        idxArr.push(dic[word]);
        // 새 단어 사전에 등록
        dic[word + msg[idx]] = Object.keys(dic).length + 1;
    }
    
    return idxArr;
}