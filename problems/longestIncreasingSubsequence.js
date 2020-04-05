/**
 * 
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  let max = 1;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = dp[i] > max ? dp[i] : max;
  }
  return max;
};

// O(nlogn)
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const lis = [];
    for(let num of nums) {
      if(lis.length === 0 || num > lis[lis.length-1]) {
        lis.push(num);
      } else {
        const idx = binarySearch(lis, num)
        lis[idx] = num;
      }
    }
    return lis.length;
};

function binarySearch(nums, target) {
  let lo = 0;
  let hi = nums.length-1;
  while(lo < hi) {
    let mid = Math.floor((lo+hi)/2);
    if(nums[mid] <= target) {
      lo = mid + 1;
    }
    else {
      hi = mid;
    }
  }
  return lo
}