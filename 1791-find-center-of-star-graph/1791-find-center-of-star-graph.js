/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let graph = {};
    
    // 노드 추가
    for(let i = 0; i < edges.length; i++){
        let [a, b] = edges[i];
        graph[a] = [];
        graph[b] = [];
    }
    
    for(let j = 0; j < edges.length; j++){
        let [a, b] = edges[j];
        graph[a].push(b);
        graph[b].push(a);
    }
    
    for(let i in graph) {
        if(graph[i].length === edges.length){
            return i;
        }
    }

};