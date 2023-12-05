function solution(name, yearning, photo) {
    let answer = [];
    let obj = {};
    
    for(let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]
    }
    
    photo.forEach(arr => {
        let num = 0
        arr.forEach(el => {
            num += obj[el] || 0
        })
        answer.push(num)
    })
    
    return answer;
}