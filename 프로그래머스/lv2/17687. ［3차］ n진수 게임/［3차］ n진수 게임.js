function solution(n, t, m, p) {
    let str = '';
    let result = '';
    
    for(let i = 0; i < t * m; i++) {
        str += i.toString(n);
    }
    
    for(let i = p - 1; i < t * m; i += m) {
        result += str[i].toUpperCase();
    }
    
    return result;
}