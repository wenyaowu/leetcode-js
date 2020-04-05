/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order. */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    const res = [];
    for(let t of tickets) {
        if(!graph[t[0]]) {
            graph[t[0]] = [];
        }
        if(!graph[t[1]]) {
            graph[t[1]] = [];
        }
        graph[t[0]].push(t[1]);
    }
    // Sort next node by lexi
    for(let k of Object.keys(graph)) {
        graph[k].sort();
    }
    
    dfs("JFK");
    return res.reverse();
    
    function dfs(node) {
        while(graph[node].length) {
            let next = graph[node].shift();
            dfs(next);
        }
        res.push(node); 
    }
};