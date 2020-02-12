/*
There are n servers numbered from 0 to n-1 connected by undirected server-to-server 
connections forming a network where connections[i] = [a, b] represents a 
connection between servers a and b. Any server can reach any other server 
directly or indirectly through the network.

A critical connection is a connection that, 
if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

 

Example 1:



Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections. */


/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    
    const graph = getGraph(n, connections);
    const rank = new Array(n).fill(-2);
    const con = {};
    for(let c of connections) {
        con[`${c[0]}->${c[1]}`] = c;
    }
    dfs(0,0);
    return Object.values(con);

    function dfs(node, depth) {
        
        
        // ----------- Some terminated condition --------------//
        if(rank[node] >= 0) {
            return rank[node] // already visited
        }
        
        // ------------- Similar to min length, visited...------------//
        rank[node] = depth;
        
        let minRankSearched = n;

        // ------------- For each posibility, neighbors here--------------//
        for(let neighbor of graph[node]) {
            // ----------- Avoid visiting some nodes ------------------//
            if(rank[neighbor] === depth -1) { // We came from this neighbor, don't visit back
                continue;
            } 
            // -------------- Recursion -----------------//
            let neighborMinRankSearched = dfs(neighbor, depth+1);
            if(neighborMinRankSearched <= depth) { //cycle happens
                removeConnection(con, neighbor, node);
            }
            minRankSearched = Math.min(minRankSearched, neighborMinRankSearched);
        }
        return minRankSearched
    }
};

function removeConnection(connections, node1, node2) {
    delete connections[`${node1}->${node2}`];
    delete connections[`${node2}->${node1}`];
}

function getGraph(n, connections) {
    const graph = new Array(n).fill(0).map(()=>[]);
    for(let c of connections) {
        graph[c[0]].push(c[1]);
        graph[c[1]].push(c[0]);
    }
    return graph;
}