/**
 * 
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 */
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const newNodes = {}; //key: node.val, value: node reference
    return dfs(node);

    function dfs(n) {
        if(!n) {
            return null
        }
        if(newNodes[n.val]) {
            return newNodes[n.val];
        }
        const newNode = new Node(n.val)
        newNodes[n.val] = newNode; //-----> This needs to go first cause it's undirect graph, it's going to go back to the prev node 
        for(let neighbor of n.neighbors) {
            newNode.neighbors.push(dfs(neighbor))
        }
        return newNode
    }   
};