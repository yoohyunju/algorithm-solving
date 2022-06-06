process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    /* 기존 풀이 시간 복잡도: O(n^)
    for(let i = 0; i < b; i++){
        for(let j = 0 ; j < a; j++){
            process.stdout.write("*");
        }
        console.log();
    }
    */

    // 리팩토링
    const row = '*'.repeat(a); // repeat() : 문자열을 주어진 횟수만큼 반복한 새로운 문자열 반환

    for(let i = 0; i < b; i++){
        console.log(row);
    }
});