/*
In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.



Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

 

Example 1:

Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]
Example 2:

Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 

Constraints:

|x| + |y| <= 300 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
  const dp = {};

  // Initialize
  dp["0-0"] = 0;
  dp["2-0"] = 2;
  dp["0-2"] = 2;

  return helper(Math.abs(x), Math.abs(y));

  function helper(x, y) {
    if (dp[`${x}-${y}`]) {
      return dp[`${x}-${y}`];
    }
    const minSteps =
      Math.min(helper(x-1, y-2), helper(x-2, y-1)) + 1;
      dp[`${x}-${y}`] = minSwaps;
    return minSteps
  }
};

