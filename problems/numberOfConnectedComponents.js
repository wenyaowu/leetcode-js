/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:

Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2
Example 2:

Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1
Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges. */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const graph = getGraph(n, edges)
    const visited = new Array(n).fill(false);
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            count += 1;
            dfs(i);
        }
    }
    return count;
    
    function dfs(node) {
        if(visited[node]) {
            return;
        }
        visited[node] = true;
        for(let n of graph[node]) {
            if(visited[n]) {
                continue;
            }
            dfs(n);
        }
    }
    
    
    function getGraph(n, edges) {
        const graph = new Array(n).fill(0).map(() => new Array());
        for(let e of edges) {
            graph[e[0]].push(e[1]);
            graph[e[1]].push(e[0]);
        }
        return graph;
    }
};