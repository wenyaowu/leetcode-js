/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them. */
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
var diameterOfBinaryTree = function(root) {
  // distance of root -> furthest right + root -> furthest left
  // height of left tree + height of right tree
  if (!root) {
    return 0;
  }
  let max = 0;
  maxDepth(root);
  return max;

  function maxDepth(node) {
    if (!node) {
      return 0;
    }
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    max = Math.max(left + right, max);

    return 1 + Math.max(left, right);
  }
};
