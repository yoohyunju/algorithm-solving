function solution(s){
    const str = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    
    [...str].forEach(e => {
        if(e === "p") countP ++;
        else if(e === "y") countY ++;
    });

    return countP === countY ? true : false;
}