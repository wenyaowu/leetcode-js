/**
 * @param {number[][]} M
 * @return {number}
 */
var longestLine = function(M) {
  if (!M || !M.length) {
    return 0;
  }
  const m = M.length;
  const n = M[0].length;

  let maxValue = 0;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  vertical();
  horizontal();
  diagonal();
  antidiagonal();
  return maxValue;

  function vertical() {
    for (let j = 0; j < n; j++) {
      if (M[0][j] === 1) {
        dp[0][j] = 1;
        if (1 > maxValue) {
          maxValue = 1;
        }
      }
    }
    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (M[i][j] === 1) {
          dp[i][j] = dp[i - 1][j] + 1;
          if (dp[i][j] > maxValue) {
            maxValue = dp[i][j];
          }
        }
      }
    }
  }

  function horizontal() {
    for (let i = 0; i < m; i++) {
      if (M[i][0] === 1) {
        dp[i][0] = 1;
        if (1 > maxValue) {
          maxValue = 1;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (M[i][j] === 1) {
          dp[i][j] = dp[i][j - 1] + 1;
          if (dp[i][j] > maxValue) {
            maxValue = dp[i][j];
          }
        }
      }
    }
  }

  function diagonal() {
    for (let j = 0; j < n; j++) {
      if (M[0][j] === 1) {
        dp[0][j] = 1;
        if (1 > maxValue) {
          maxValue = 1;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      if (M[i][0] === 1) {
        dp[i][0] = 1;
      }
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (M[i][j] === 1) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxValue) {
            maxValue = dp[i][j];
          }
        }
      }
    }
  }

  function antidiagonal() {
    for (let j = 0; j < n; j++) {
      if (M[0][j] === 1) {
        dp[0][j] = 1;
        if (1 > maxValue) {
          maxValue = 1;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      if (M[i][n - 1] === 1) {
        dp[i][n - 1] = 1;
      }
    }
    for (let i = 1; i < m; i++) {
      for (let j = n - 2; j >= 0; j--) {
        if (M[i][j] === 1) {
          dp[i][j] = dp[i - 1][j + 1] + 1;
          if (dp[i][j] > maxValue) {
            maxValue = dp[i][j];
          }
        }
      }
    }
  }
};
