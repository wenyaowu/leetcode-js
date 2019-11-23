/**
 * 
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // if preorder.length === 0, return
    if(preorder.length === 0) {
        return null;
    }
    // preorder[0] is root
    const root = new TreeNode(preorder[0]);
    
    // find preorder[0] in inorder (index i)
    const i = inorder.indexOf(preorder[0]);
    // left = buildTree(preorder[:i], inorder[0:i+1])
    root.left = buildTree(preorder.slice(1,i+1), inorder.slice(0,i))
    // right = buildTree(preorder[], )
    root.right = buildTree(preorder.slice(i+1,preorder.length),inorder.slice(i+1,inorder.length))
    return root;
};

