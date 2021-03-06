/**Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = [];
  if(!root) {
      return paths;
  }
  dfs(root, `${root.val}`);
  return paths;

  function dfs(node, currentPath) {
    if (!node.left && !node.right) {
      paths.push(currentPath);
      return;
    }
    if (node.left) {
      dfs(node.left, `${currentPath}->${node.left.val}`);
    }
    if (node.right) {
      dfs(node.right, `${currentPath}->${node.right.val}`);
    }
  }
};
