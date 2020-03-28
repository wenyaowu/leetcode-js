/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // preorder
    let res = ""
    preorder(root);
    return res.substring(1);
    
    function preorder(node) {
        if(!node) {
            res+=",X";
            return
        }
        res += `,${node.val}`;
        preorder(node.left);
        preorder(node.right);
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",");
    return buildTree()
    
    function buildTree() {
        let current = nodes.shift();
        if(current === "X") {
            // If we encounter "X" meaning that the branch is ended, we are moving on
            // to other side (Left -> Right): node.left = buildTree() -> node.right = buildTree()
            // or move on to the other node: node.right = buildTree() -> return node
            return null;
        }
        let node = new TreeNode(+current);
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */