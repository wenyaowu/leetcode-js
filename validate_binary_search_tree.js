/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // keep max and min value to compare
    return helper(root, Number.MAX_VALUE, -Number.MAX_VALUE);
};

function helper(node, maxValue, minValue) {

    if(!node) {
        return true;
    }
    if(node.val >= maxValue || node.val <= minValue) {
        
        return false;
    }

    return helper(node.left, node.val, minValue) && helper(node.right, maxValue, node.val);
}