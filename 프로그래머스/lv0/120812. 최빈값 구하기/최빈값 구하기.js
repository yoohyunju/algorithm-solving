function solution(array) {
    let obj = {};

    array.map(e => obj[e] = (obj[e] || 0) + 1);
    
    const max = Math.max(...Object.values(obj));
    const arr = Object.keys(obj).filter(key => obj[key] === max);
    
    return arr.length > 1 ? -1 : Number(...arr);
}