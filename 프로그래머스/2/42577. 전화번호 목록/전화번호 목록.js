function solution(phone_book) {
    const phoneMap = new Map()
    
    phone_book.forEach(number => phoneMap.set(number, true))
    
    for(const number of phone_book) { 
        for(let i = 0; i < number.length; i++) {
            if(phoneMap.get(number.slice(0, i))) return false
        }
    }
    
    return true
}