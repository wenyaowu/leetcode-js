/**
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let endPointer = nums.length - 1;
  let startPointer = 0;
  // keep moving 2 to the end, 0 to the start, ignore 1
  let i = 0;
  while (i <= endPointer) {
    if (nums[i] === 0) {
      nums = swap(nums, i, startPointer);
      startPointer += 1;
      i++;
    } else if (nums[i] === 2) {
      nums = swap(nums, i, endPointer);
      endPointer -= 1;
    } else {
        i++;
    }
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
