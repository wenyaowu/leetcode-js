/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6 */
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
var flatten = function(root) {
    if(!root) {
        return null; 
    }
    let left = root.left;
    let right = root.right;
    
    root.left = null;
    flatten(left);
    flatten(right);

    root.right = left;
    let curr = root;
    while(curr && curr.right) {
        curr = curr.right;
    }
    curr.right = right;
    return root;
};