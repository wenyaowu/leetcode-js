/*
Given two binary search trees, return True if and only if there is a node in the first tree and a node in the second tree whose values sum up to a given integer target.

 

Example 1:



Input: root1 = [2,1,4], root2 = [1,0,3], target = 5
Output: true
Explanation: 2 and 3 sum up to 5.
Example 2:



Input: root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18
Output: false
 

Constraints:

Each tree has at most 5000 nodes.
-10^9 <= target, node.val <= 10^9 */
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
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    if(!root1 || !root2) {
        return false;
    }
    let sum = root1.val + root2.val;
    if(sum === target) {
        return true;
    }
    else if(sum > target) {
        return twoSumBSTs(root1.left, root2, target) || twoSumBSTs(root1, root2.left, target);
    }
    else {
        
        return twoSumBSTs(root1.right, root2, target) || twoSumBSTs(root1, root2.right, target);
    }
};