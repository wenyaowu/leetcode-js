/*
Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

 

Example 1:

Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
 

Constraints:

2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than 2^31). */
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    const m = arr.length;
    const dp = new Array(m).fill(0).map(() => new Array(m).fill(-1));
    return helper(0, m - 1);
  
    function helper(left, right) {
      if (left === right) {
        return 0; // Leaf
      }
      if (dp[left][right] !== -1) {
        return dp[left][right];
      }
      let res = Number.MAX_VALUE;
      for (let i = left; i < right; i++) {
        res = Math.min(
          res,
          Math.max(...arr.slice(left, i + 1)) *
            Math.max(...arr.slice(i + 1, right + 1)) +
            helper(left, i) +
            helper(i + 1, right)
        );
      }
      dp[left][right] = res;
      return res;
    }
  };
  

/**
 * [6,2,4]
 *  l   r
 * k = l -> [6], [2,4]
 * k = l+1 -> [6,2], [4]
 */
