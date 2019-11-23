/**
 * Given a binary tree, return the zigzag level order traversal of its 
 * nodes' values. (ie, from left to right, 
 * then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
      3
   /     \
  9      20
 / \    /  \
1   2  15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
 */

// [3] -> (left) [9, 20] -> right [7, 15, 2, 1] ->

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
var zigzagLevelOrder = function(root) {

  let left = true; // direction
  let currentStack = [root];
  let tempStack = [];
  const res = [];
  if(!root) {
      return res;
  }
  let level = [];

  while (currentStack.length) {
    let node = currentStack.pop();
    level.push(node.val);
    if (left) {
      if (node.left) tempStack.push(node.left);
      if (node.right) tempStack.push(node.right);
    } else {
      if (node.right) tempStack.push(node.right);
      if (node.left) tempStack.push(node.left);
    }

    if (currentStack.length === 0) {
      res.push(level);
      level = [];
      currentStack = tempStack;
      tempStack = [];
      left = !left;
    }
  }
  return res;
};
