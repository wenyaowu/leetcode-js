/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

function helper(node, res) {
    if(!node) {
        return;
    }
    helper(node.left, res);
    res.push(node.val)
    helper(node.right, res);
}