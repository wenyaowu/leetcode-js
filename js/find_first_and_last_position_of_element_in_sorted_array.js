/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let index = [-1, -1];
  if (!nums || nums.length === 0) {
    return index;
  }
  const leftest = helper(nums, target, true);
  if (nums[leftest] !== target) {
    return index; // Cant find
  }
  index[0] = leftest;
  index[1] = helper(nums, target, false)-1;
  return index
};

function helper(nums, target, left) {
  let l = 0,
    r = nums.length; // nums.length - 1 doesn't work, why???
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > target || (nums[mid] === target && left)) {
        r = mid; // Keep searching left side
    } else {
        l = mid + 1;
    }
  }
  return l;
}

/**
    Key: Use binary search to find left bound and right bound separately. 
    Modify birnary search function so that it doesn't stop when find target. 
    Proceed to left or right to find the left, right bound.
*/ 
