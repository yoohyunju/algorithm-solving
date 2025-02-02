function solution(id_list, report, k) {
    const history = {}
    const reportedUsers = {}
    
    report.forEach(i => {
        const [userID, reportedID] = i.split(' ')
        
        history[userID] = history[userID] || []
        
        if(!history[userID].includes(reportedID)) {
            history[userID].push(reportedID)
            reportedUsers[reportedID] = (reportedUsers[reportedID] || 0) + 1
        }
    })
    
    return id_list.map(id => (history[id] || []).filter(i => reportedUsers[i] >= k).length)
}