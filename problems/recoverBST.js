/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution? */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * In inorder traversal, the result should be sorted from the smallest to largest.
 * If two elements are swapped, the first error should be the larger one the second one should be the smaller one
 * For example [1,2,3,4,5,6] -> [1,6,3,4,5,2]
 * We first detect 6->3 is out of order, we pick 6 here
 * second detect 5->2, we pick 2
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let first = null;
  let second = null;
  let prevNode;
  inorder(root);
  swap(first, second);
  
  function inorder(node) {
      if(!node) {
          return;
      }
      inorder(node.left);
      if(!first && prevNode && prevNode.val >= node.val) {
          first = prevNode;
      }
      if (first && prevNode && prevNode.val >= node.val) { // Not else if casue if the nodes swapped are next to each other the error will occur only once
          second = node;
      }
      prevNode = node;
      inorder(node.right);
  }
  function swap(node1, node2) {
      let temp = node1.val;
      node1.val = node2.val;
      node2.val = temp;
  }
};