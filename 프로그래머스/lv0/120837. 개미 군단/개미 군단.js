function solution(hp) {
    let warlord = Math.floor(hp / 5);
    let soldier = Math.floor((hp - warlord * 5) / 3);
    let ergate = Math.floor((hp - warlord * 5 - soldier * 3) / 1);
    
    return warlord + soldier + ergate;
}