function solution(n, words) {
    let [outNum, outOrder] = [0, 0];
    let wordsList = [];
    const wordsLen = words.length;

    for(let i = 0; i < wordsLen - 1; i++) {
        let [curWord, nextWord] = [words[i], words[i+1]];
        let endSpell = curWord.at(-1);
        let firstSpell = nextWord.at(0);
        
        wordsList.push(curWord);
            
        if(endSpell !== firstSpell || wordsList.includes(nextWord)) {
            (i + 2) % n !== 0 ? outNum = (i + 2) % n : outNum = n;
            outOrder = Math.ceil((i + 2) / n);
            
            break;
        }
    }

    return [outNum, outOrder];
}
