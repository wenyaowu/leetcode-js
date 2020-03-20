/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer. */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let count = 0;
  backtracking(0, 0);
  return count;
  function backtracking(idx, currentSum) {
    if (idx === nums.length) {
      if (currentSum === S) {
        count += 1;
      }
      return;
    }
    backtracking(idx + 1, currentSum + nums[idx]);
    backtracking(idx + 1, currentSum - nums[idx]);
  }
};

// DP Solution: knapsack problem, Take or not take
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const m = nums.length;
  const sum = nums.reduce((accu, curr) => accu + curr, 0);
  if (S > sum || S < -sum) {
    return 0;
  }
  // dp solution
  // dp[i][j]: ways to form target "j" with first "i"th number
  const dp = new Array(m + 1).fill(0).map(() => new Array(2 * sum + 1).fill(0)); // The range for this is different 

  // Initial Condition:
  dp[0][sum] = 1;
  // dp[0][j] = 0

  // dp equation: dp[i][j] = dp[i-1][j+nums[i]] (1) + dp[i-1][j-nums[i]]  (2)
  // So we can pick (1) nums[i] as negative (2) nums[i] as positive
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      // ----------> j needs to start from 0 becasue the number can be positive and negative so with ith numbers, it can sum up to j(target) = 0
      // It's different from other sum problem (coin change for example) that it's always positive
      let idx = i - 1;
      if (j + nums[idx] <= 2 * sum) {
        dp[i][j] += dp[i - 1][j + nums[idx]];
      }
      if (j - nums[idx] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[idx]];
      }
    }
  }
  return dp[m][S + sum];
};
