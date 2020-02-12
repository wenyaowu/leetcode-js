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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let first = null;
  let second = null;
  let prevNode = new TreeNode(Number.MIN_SAFE_INTEGER);
  inorder(root);
  swap(first, second);

  function inorder(node) {
    if (!node) {
      return;
    }
    inorder(node.left);
    // Do something
    if (!first && prevNode.val >= node.val) {
      first = prevNode;
    }
    if (first && prevNode.val >= node.val) {
      console.log(node.val);
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
