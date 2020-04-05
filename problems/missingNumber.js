/**
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  nums.push("*");
  let i = 0;
  while (i < n) {
    if (nums[i] === "*" || nums[i] === i) {
      i += 1;
    } else {
      currentNumber = nums[i];
      temp = nums[currentNumber];
      nums[currentNumber] = currentNumber;
      nums[i] = temp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "*") {
      return i;
    }
  }
};
