/*
You have d dice, and each die has f faces numbered 1, 2, ..., f.

Return the number of possible ways (out of fd total ways) modulo 10^9 + 7 to roll the dice so the sum of the face up numbers equals target.

 

Example 1:

Input: d = 1, f = 6, target = 3
Output: 1
Explanation: 
You throw one die with 6 faces.  There is only one way to get a sum of 3.
Example 2:

Input: d = 2, f = 6, target = 7
Output: 6
Explanation: 
You throw two dice, each with 6 faces.  There are 6 ways to get a sum of 7:
1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
Example 3:

Input: d = 2, f = 5, target = 10
Output: 1
Explanation: 
You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.
Example 4:

Input: d = 1, f = 2, target = 3
Output: 0
Explanation: 
You throw one die with 2 faces.  There is no way to get a sum of 3.
Example 5:

Input: d = 30, f = 30, target = 500
Output: 222616187
Explanation: 
The answer must be returned modulo 10^9 + 7. */

// DFS solution, TLE

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  let count = 0;
  dfs(target, 0);
  return count;
  function dfs(t, dice) {
    if (t < 0) {
      return;
    }
    if (t === 0) {
      count += dice === d ? 1 : 0;
      return;
    }
    for (let i = 1; i < f + 1; i++) {
      // For each dice
      if (t - i >= 0) {
        dfs(t - i, dice + 1);
      }
    }
  }
};

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  const dp = new Array(d + 1).fill(0).map(() => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (j > f * i) {
        // too big we cant possible get the amount, 0 way
        continue;
      }
      for (let face = 1; face < f + 1; face++) {
        if (j - face >= 0) {
          dp[i][j] += dp[i - 1][j - face];
        }
      }
      dp[i][j] %= 1000000007;
    }
  }
  return dp[d][target];
};
