/**
 * 
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  /**
   * DFS
   * Key: At some point, we are going to encounter a node that can not proceed any direction
   * Max will be record, the the recursion will start returning at that point
   */
  if (!matrix || !matrix[0]) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const max = 1;
  //cache is used to save the final calculate result for each index
  const maxCache = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(dfs(matrix, i, j, maxCache), max);
    }
  }
  return max;
};

var dfs = function(matrix, x, y, cache) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (cache[x][y] !== 0) {
    return cache[x][y];
  }
  let max = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  for (let i = 0; i < 4; i++) {
    let xn = x + dx[i];
    let yn = y + dy[i];

    if (
      xn < 0 ||
      yn < 0 ||
      xn >= m ||
      yn >= n ||
      matrix[xn][yn] <= matrix[x][y] // ** The sequence is strictly increase so we wont viist the same node again
    ) {
      continue;
    }

    max = Math.max(1 + dfs(matrix, xn, yn, cache), max);
  }
  cache[x][y] = max;
  return max;
};
