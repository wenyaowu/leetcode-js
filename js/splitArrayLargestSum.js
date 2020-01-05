/*
Given an array which consists of non-negative integers and an integer m, 
you can split the array into m non-empty continuous subarrays. 
Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18. */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let lo = Math.max(...nums);
  let hi = nums.reduce((accum, current) => accum + current, 0);
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (isValid(nums, mid, m)) {
      // <= m partitions
      hi = mid; // Try smaller, greedy
    } else {
      lo = mid + 1; // too small
    }
  }
  return lo;
};

var isValid = function(nums, value, m) {
  let partitions = 1;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > value) {
      currentSum = nums[i];
      partitions += 1;
      if (partitions > m) {
        return false;
      }
    }
  }
  return true;
};
