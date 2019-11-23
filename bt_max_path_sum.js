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
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;
    if(!root) return 0;
    pathSum(root);
    return max;

    function pathSum(node) {
        if(!node) return 0;
        let left = Math.max(0, pathSum(node.left));
        let right = Math.max(0, pathSum(node.right));
        max = Math.max(max, node.val + left + right);
        /**
         *       a
         *      / \
         *     b
         *    / \
         *   c   d
         * The return value in this function represent this node's max value
         * to it's parent node. When parent node decide to pick this node, 
         * this node can only pick left or right (either c->b->a or d->b->a)
         * b is current node, a is parent node.
         * therefore, we pick the bigger between c or d (left or right)
         * */ 

        return Math.max(left, right) + node.val;  
    }
};

