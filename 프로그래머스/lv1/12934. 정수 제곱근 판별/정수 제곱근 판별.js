function solution(n) {

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(i*i === n){
            return (i + 1) * (i + 1);
        }
    }
    
    return -1;
}