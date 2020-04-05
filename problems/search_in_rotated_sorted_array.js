/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let head = 0,
    tail = nums.length - 1;
  while (head <= tail) { // <----- Important Condition
    let mid = Math.floor((head + tail) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    // Pick a side
    if (nums[mid] < nums[tail]) {
      // right side is valid
      if (target > nums[mid] && target <= nums[tail]) {
        head = mid + 1; // take right 
      } else {
        tail = mid - 1;
      }
    } else {
      // left side id valid
      if (target >= nums[head] && target < nums[mid]) {
        tail = mid - 1; // take left
      } else {
        head = mid + 1;
      }
    }
  }
  return -1;
};

// * Use mid + 1 and mid - 1 to avoid infinite loop when head === tail
