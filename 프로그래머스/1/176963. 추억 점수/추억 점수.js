function solution(name, yearning, photo) {
    let answer = [];
    const map = new Map();
    
    name.forEach((el, idx) => {
        map.set(el, yearning[idx]);
    });
    
    photo.forEach(arr => {
        const sum = arr.reduce((acc, cur) => 
            acc + (map.get(cur) || 0), 0
        )
        answer.push(sum)
    })

    return answer;
}