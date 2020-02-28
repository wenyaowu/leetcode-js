/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const rank = new Array(n).fill(-2);
    const graph = getGraph(n, connections);
    const con = {};
    for(let c of connections) {
        con[`${c[0]}-${c[1]}`] = c
    }
    dfs(0, 0);
    return Object.values(con);
    
    function dfs(node, depth) {
        if(rank[node] >= 0) {
            return rank[node];
        }
        rank[node] = depth;
        let minRank = n;
        for(let neighbor of graph[node]){
            if(rank[neighbor] === depth-1) { // DO NOT VISIT PREV NODE
                continue;
            }
            
            let r = dfs(neighbor, depth+1);
            if(r <= depth) {
                deleteConnection(con, node, neighbor);
            }
            minRank = Math.min(minRank, r);
        }
        return minRank;
    }

}

function deleteConnection(con, node1, node2) {
    delete con[`${node1}-${node2}`];
    delete con[`${node2}-${node1}`];
}

function getGraph(n, connections) {
    const graph = new Array(n).fill(0).map(()=>[]);
    for(let c of connections) {
        graph[c[0]].push(c[1]);
        graph[c[1]].push(c[0]);
    }
    return graph;
}