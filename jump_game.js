/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // start from 0
  // Calculate the current max reach
  // We only access the index that is <= max reach (otherwise we cant reach it)
  // update each check if max reach is bigger
  // when max reach >= nums.length ----> return true
  // return false in the end as max reach can never reach last index
  let maxReach = 0;
  let i = 0;
  while (i <= maxReach && i < nums.length) {
    let currentReach =  i + nums[i];
    maxReach = currentReach > maxReach ? currentReach: maxReach;
    if (maxReach >= nums.length - 1) {
      return true;
    }
    i++;
  }
  return false;
};
