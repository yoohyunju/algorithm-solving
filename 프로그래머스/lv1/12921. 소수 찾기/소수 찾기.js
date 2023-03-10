function solution(n) {
    const s = new Set();
    
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

// function solution(n) {
//     let answer = 1;
    
//     for(let i = 3; i <= n; i++) {
//         let flag = true;
        
//         for(let j = 2; j <= Math.sqrt(i); j++) {
//             if(i % j === 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag) answer++;
//     }
    
//     return answer;
// }