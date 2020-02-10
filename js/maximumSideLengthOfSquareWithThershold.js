/**
 * Given a m x n matrix mat and an integer threshold. Return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

 

Example 1:


Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than 4 is 2 as shown.
Example 2:

Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0
Example 3:

Input: mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
Output: 3
Example 4:

Input: mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold = 40184
Output: 2
 

Constraints:

1 <= m, n <= 300
m == mat.length
n == mat[i].length
0 <= mat[i][j] <= 10000
0 <= threshold <= 10^5
 */

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;
  let res = 0;
  let len = 1;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let matXIndex = i - 1;
      let matYIndex = j - 1;
      dp[i][j] =
        dp[i - 1][j] +
        dp[i][j - 1] -
        dp[i - 1][j - 1] +
        mat[matXIndex][matYIndex];

      if (i >= len && j >= len) {
        let square =
          dp[i][j] - dp[i - len][j] - dp[i][j - len] + dp[i - len][j - len];
        if (square <= threshold) {
          res = len;
          len += 1;
        }
      }
    }
  }
  return res;
};

/** Solution 2 using binary search */

var maxSideLength = function(mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;
  let res = 0;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let matXIndex = i - 1;
      let matYIndex = j - 1;
      dp[i][j] =
        dp[i - 1][j] +
        dp[i][j - 1] -
        dp[i - 1][j - 1] +
        mat[matXIndex][matYIndex];
    }
  }

  let lo = 0;
  let hi = Math.min(m, n);
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (searchSquare(mid)) {
      res = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  function searchSquare(len) {
    for (let i = len; i <= m; i++) {
      for (let j = len; j <= n; j++) {
        let square =
          dp[i][j] - dp[i - len][j] - dp[i][j - len] + dp[i - len][j - len];
        if (square <= threshold) {
          return true;
        }
      }
    }
    return false;
  }
  return res;
};
