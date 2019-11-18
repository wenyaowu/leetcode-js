/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let currentStack = [root];
    const res = [];
    let tempStack = [];
    let level = [];
    if(!root) return res;
    while(currentStack.length !== 0) {
        // Shift each node out    
        let node = currentStack.shift();
        // Add value to level
        level.push(node.val); 
        // push left to tempStack
        if(node.left) {
            tempStack.push(node.left);
        }
        // push right to tempStack
        if(node.right) {
            tempStack.push(node.right);
        }

        if(currentStack.length === 0) {
            // add current level to res
            res.push(level);
            // reset level
            level = [];
            // replace current stack with tempStack
            currentStack = tempStack;
            // rest tempStack
            tempStack = [];
        }
    }
    return res;
};