/**
 * 
 Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6 
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
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  let hl = 0;
  let hr = 0;
  let left = root;
  let right = root;
  while (left) {
    left = left.left;
    hl += 1;
  }
  while (right) {
    right = right.right;
    hr += 1;
  }
  if (hl === hr) {
    return Math.pow(2, hl) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
