/**
 * 
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    let j = 1;
    while (i + j * j <= n) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
      j += 1;
    }
  }
  return dp[n];
};
