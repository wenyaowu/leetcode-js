/**
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length === 0) {
    return nums;
  }
  let nonDupIndex = 0;
  let scanPointer = 0;

  while (scanPointer < nums.length) {
    if (scanPointer === 0 || nums[scanPointer] !== nums[scanPointer - 1]) {
      nums[nonDupIndex] = nums[scanPointer];
      nonDupIndex += 1;
    }
    scanPointer += 1;
  }
  return nonDupIndex; // -----> Return the new length
};
