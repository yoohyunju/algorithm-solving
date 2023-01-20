function solution(id_pw, db) {
    let answer = '';
    const id = id_pw[0];
    const pw = id_pw[1];
    
    if(db.filter(e => e[0] === id && e[1] === pw).length) {
        answer = "login"
    } else if(db.filter(e => e[0] === id && e[1] !== pw).length) {
        answer = "wrong pw"
    } else {
        answer = "fail";
    }
    
    return answer;
}