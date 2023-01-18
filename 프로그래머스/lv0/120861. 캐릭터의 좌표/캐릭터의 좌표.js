function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const xrange = (board[0] - 1) / 2;
    const yrange = (board[1] - 1) / 2;
    
    for(let i of keyinput) {
        switch(i) {
            case "up":
                if(y < yrange) y++;
                break;
            case "down":
                if(y > -yrange) y--;
                break;
            case "left":
                if(x > -xrange) x--;
                break;
            case "right":
                if(x < xrange) x++;
                break;
        }
    }
    
    return [x, y];
}