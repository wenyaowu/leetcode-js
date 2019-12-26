/**
 * 
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? 
(The output array does not count as extra space for the purpose of space complexity analysis.)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  /**
   * [a1,a2,a3,a4]
   * [   1,       a1,    a1*a2, a1*a2*s3] to the left
   * [a2*a3*a4,  a3*a4,    a4,     1] to the right
   */
  if (!nums) {
    return [];
  }

  const res = [1];
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    res[nums.length - i - 1] *= rightProduct;
    rightProduct *= nums[nums.length - i - 1];
  }

  return res;
};
