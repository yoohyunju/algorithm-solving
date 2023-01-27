function solution(board) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    
    const n = board.length;
    const copy = JSON.parse(JSON.stringify(board)); //깊은 복사

    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(!board[x][y]) continue;
            
            for(let i = 0; i < 8; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= n)
                    continue;
                
                copy[nx][ny] = 1;
            }
        }
    }
    
    return copy.flat().filter(v => v === 0).length;
}