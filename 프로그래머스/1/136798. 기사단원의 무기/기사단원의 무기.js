const solution = (number, limit, power) => {
    const powerList = getPowerList(number)
    const totalKg = powerList.reduce(
        (acc, cur) => acc + (cur > limit ? power : cur), 0
    )
    
    return totalKg
}

const getPowerList = (number) => {
    const powerList = []
    
    for(let i = 1; i <= number; i++) {
        const divisors = []
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                divisors.push(j)
                if(j !== (i / j)) divisors.push(i / j)
            }
        }
        powerList.push(divisors.length)
    }
    return powerList
}
