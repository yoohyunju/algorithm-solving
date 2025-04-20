function solution(participant, completion) {
    const map = new Map()
    
    participant.forEach(i => map.set(i, (map.get(i) || 0) + 1))
    completion.forEach(i => map.get(i) && map.set(i, map.get(i) - 1))
    
    return participant.find(i => map.get(i));
}