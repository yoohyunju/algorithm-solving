function solution(babbling) {
    const re = /aya|ye|woo|ma/g;
    
    return (babbling.map(e => e.replace(re, "")).filter(e => e === "")).length;
}