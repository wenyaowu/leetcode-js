/*
Analysis for recursive solution:

Worst case is perfect binary search tree (all same values except one leaf in one of the tree), so h = logN.
4 subproblem at each height, so time = 4^(h) = 4^(logN) (h=logN in worst case since worst case is perfect binary search tree) = 2^(2logN) = 2^(logN^2) = N^2.
However, we are told that the numbers are unique so half of the recursive calls would fail, which makes time complexity
2 subproblem at each height, so time = 2^h = 2^logN = N.

Space: O(h) (O(N) in the worst case of skewed trees!) */

/*
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes root1 and root2.

 

Example 1:

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.
Flipped Trees Diagram
 

Note:

Each tree will have at most 100 nodes.
Each value in each tree will be a unique integer in the range [0, 99]. */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  return helper(root1, root2);
  function helper(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }

    return (
      (helper(node1.left, node2.left) && helper(node1.right, node2.right)) ||
      (helper(node1.left, node2.right) && helper(node1.right, node2.left))
    );
  }
};
