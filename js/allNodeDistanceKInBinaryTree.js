/*
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
 

Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= K <= 1000. */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    

    const graph = {};
    buildGraph(root, null);
    const queue = [target.val];
    const visited = {};
    
    while(queue.length) {
        if(K === 0) {
            return queue;
        }
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let curr = queue.shift();
            visited[curr] = true;
            for(let i of graph[curr]) {
                if(!visited[i]) {
                    queue.push(i);
                }
            }
        } 
        K-=1;
    }

    function buildGraph(node, parent) {
        if(!node) {
            return;
        }
        if(parent) {
            if(!graph[parent.val]) {
                graph[parent.val] = [];
            }
            graph[parent.val].push(node.val);
            if(!graph[node.val]) {
                graph[node.val] = [];
            }
            graph[node.val].push(parent.val);
        }
        buildGraph(node.left, node);
        buildGraph(node.right, node);
    }
};