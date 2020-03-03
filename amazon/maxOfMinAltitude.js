/**
 * Given a matrix with r rows and c columns, find the maximum score of a path starting at [0, 0] and ending at [r-1, c-1]. The score of a path is the minimum value in that path. For example, the score of the path 8 → 4 → 5 → 9 is 4.

Don't include the first or final entry. You can only move either down or right at any point in time.

Example 1:

Input:
[[5, 1],
 [4, 5]]

Output: 4
Explanation:
Possible paths:
5 → 1 → 5 => min value is 1
5 → 4 → 5 => min value is 4
Return the max value among minimum values => max(4, 1) = 4.
Example 2:

Input:
[[1, 2, 3]
 [4, 5, 1]]

Output: 4
Explanation:
Possible paths:
1-> 2 -> 3 -> 1
1-> 2 -> 5 -> 1
1-> 4 -> 5 -> 1
So min of all the paths = [2, 2, 4]. Note that we don't include the first and final entry.
Return the max of that, so 4.
 */

function maxOfMinPath(grid) {
  // dp[x][y] = max( min(dp[x-1][y], grid[x-1][y]),  min(dp[x][y-1], grid[x][y-1])  )
  // dp[0][0] = 0
  // dp[x][0] = min(grid[1][0] ~ grid[x-1][0])
  // dp[0][y] = min(grid[0][1] ~ grid[0][y-1])
  if (!grid || !grid[0]) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  // Initialize
  for (let i = 2; i < m; i++) {
    dp[i][0] = Math.min(dp[i - 1][0], grid[i - 1][0]);
  }
  for (let j = 2; j < n; j++) {
    dp[0][j] = Math.min(dp[0][j - 1], grid[0][j - 1]);
  }

  console.log(dp);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(
        Math.min(dp[i - 1][j], grid[i - 1][j]),
        Math.min(dp[i][j - 1], grid[i][j - 1])
      );
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
}

console.log(
  maxOfMinPath([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
