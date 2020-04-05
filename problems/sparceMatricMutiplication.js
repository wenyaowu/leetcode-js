/*
Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:

Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 | */
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

/**
  * 
     Fast version, if A[i][k] === 0, we can skip the whole loop on b which will happen a lot in sparce matrix
  */
var multiply = function(A, B) {
  const m = A.length;
  const n = A[0].length;
  const nb = B[0].length;
  const res = new Array(m).fill(0).map(() => new Array(nb).fill(0));

  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (A[i][k] !== 0) {
        for (let j = 0; j < nb; j++) {
          res[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  }
  return res;
};

/* Brute Force */
var multiply = function(A, B) {
  const m = A.length;
  const n = A[0].length;
  const nb = B[0].length;
  const res = new Array(m).fill(0).map(() => new Array(nb).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < nb; j++) {
      for (let k = 0; k < n; k++) {
        res[i][j] += A[i][k] * B[k][j];
      }
    }
  }
};
