function solution(dots) {
    let width = Math.max(...dots.map(x => x[0])) - Math.min(...dots.map(x => x[0]))
    let heigth = Math.max(...dots.map(x => x[1])) - Math.min(...dots.map(x => x[1]))
    
    return width * heigth;
}
