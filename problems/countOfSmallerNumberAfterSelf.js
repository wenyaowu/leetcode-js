/*
You are given an integer array nums and you have to return a new counts array. 
The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.count = 0; // How many nodes are smalleer than this node
    this.dup = 1; // duplication of this value in the array
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  if (!nums) {
    return [];
  }
  const n = nums.length;
  const res = new Array(n).fill(0);
  let root = new TreeNode(nums[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    res[i] = insert(nums[i], root);
  }
  return res;
};

var insert = function(num, root) {
  let count = 0;
  let current = root;
  while (current) {
    if (num === current.val) {
        current.dup += 1;
      return count + current.count;
    } else if (num > current.val) {
      count += (current.count + current.dup);
      if (!current.right) {
        current.right = new TreeNode(num);
        return count;
      } else {
        current = current.right;
      }
    } else {
      current.count += 1;
      if (!current.left) {
        current.left = new TreeNode(num);
        return count;
      } else {
        current = current.left;
      }
    }
  }
};
