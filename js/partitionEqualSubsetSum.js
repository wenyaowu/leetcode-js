/**
 * 
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // Intuition: Taget Sum Problem with target = 0
  const m = nums.length;
  const sum = nums.reduce((accu, curr) => accu + curr, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  // range: -sum ~ sum ---> 0 ~ 2 * sum
  const dp = new Array(m + 1).fill(0).map(() => new Array(sum + 1).fill(false));

  //inital
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }
  dp[m][sum] = true;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      let idx = i - 1; // actual index of the nums array
      dp[i][j] = dp[i - 1][j];
      if (j - nums[idx] >= 0) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[idx]];
      }
    }
  }
  return dp[m][sum / 2];
};
