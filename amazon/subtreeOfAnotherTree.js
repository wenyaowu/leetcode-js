/*
Given two non-empty binary trees s and t, 
check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s === null) {
    return false;
  }
  /**
   * The value in the tree is not unique. 
   * we need to check every possible node to start
   */
  if (check(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function check(s, t) {
  if (s === null && t === null) {
    return true; // leaf
  }
  if (s === null || t === null) {
    return false;
  }
  if (s.val === t.val) {
    return check(s.left, t.left) && check(s.right, t.right);
  }
  return false;
}
