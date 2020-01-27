/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const stack = [];
  const res = [];
  for (let i = 0; i <= nums.length; i++) {
    while (stack.length > 0 && stack[0] <= i - k) {
      stack.shift();
    }
    while (stack.length > 0 && stack[nums.length - 1] <= nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
    if (i - k + 1 > 0) {
      res.push(stack[0]);
    }
  }
  return res;
};
