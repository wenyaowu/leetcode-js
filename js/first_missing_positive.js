/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    if (
      // nums[i] is in the range, there's a correct position for this number --(1)
      nums[i] > 0 &&
      nums[i] <= n &&
      // num[i] is not i+1, we need to move nums[i] to nums[nums[i]-1] --(2)
      nums[i] !== i + 1 &&
      // If nums[i] === nums[nums[i]-1], it will fall into infinite loop (Keep swapping these two) --(3)
      nums[i] !== nums[nums[i] - 1] // nums[i] should
    ) {
      // Swap nums[i] to nums[nums[i]-1]
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    } else {
      // Else proceed
      i++;
    }
  }
  for (let i = 0; i < n; i++) {
    // Find the first not in place number
    if (nums[i] !== i + 1) return i + 1;
  }
  // the whole array is in place
  return n + 1;
};

// The goal is to make nums[i] = i + 1 --> ex: [1,2,3,4,5,6]
