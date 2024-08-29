function solution(n, lost, reserve) {
    const reserveList = reserve.map(idx => idx - 1)
    const lostList = lost.map(idx => idx - 1)
    const clothesList = Array(n).fill(1)
    
    reserveList.forEach(idx => clothesList[idx]++)
    lostList.forEach(idx => clothesList[idx]--)

    for(let i = 0; i < n; i++) {
        if(clothesList[i] < 1) {
            if(i !== 0 && (clothesList[i - 1] > 1)) {
                clothesList[i]++
                clothesList[i - 1]--
            } else if(i !== n - 1 && (clothesList[i + 1] > 1)) {
                clothesList[i]++
                clothesList[i + 1]--
            }
        }
    }

    return clothesList.filter(item => item !== 0).length
}
