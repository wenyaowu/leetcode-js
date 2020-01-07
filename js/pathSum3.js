/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;
  helper(root, [sum], sum);
  return count;

  function helper(node, targets, sum) {
    if (!node) {
      return;
    }
    let newTargets = targets
      .map(t => {
        if (newTarget === 0) {
          count += 1;
        }
        return t - node.val;
      })

    helper(node.left, [...newTargets, sum], sum);
    helper(node.right, [...newTargets, sum], sum);
  }
};
