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
var isSymmetric = function(root) {
    if(!root) return true;
    return helper(root.left, root.right);
};

function helper(node1, node2) {
    if(node1 === null || node2 === null) {
        return node1 === null && node2 === null
    }

    if(node1.val !== node2.val) {
        return false;
    }
    return helper(node1.right, node2.left) && helper(node1.left, node2.right);
}