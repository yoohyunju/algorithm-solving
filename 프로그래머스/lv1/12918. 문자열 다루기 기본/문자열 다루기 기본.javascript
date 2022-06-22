function solution(s) {
 
    if(s.includes('e')) return false;
    
    if((s.length === 4 || s.length === 6) && !isNaN(Number(s))){ // Number 함수는 e도 숫자로 변환하여 지수로 계산
        return true;
    }else return false;
}