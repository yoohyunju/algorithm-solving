function solution(spell, dic) {
    let flag = true;
    
    for(let i = 0; i < dic.length; i++) {
        let arr = dic[i].split('');
        flag = true;
        
        for(let j = 0; j < spell.length; j++) {
            if(!arr.includes(spell[j])) {
                flag = false;
                break;
            }
        }
        
        if(flag) return 1;
    }
    
    return 2;
}