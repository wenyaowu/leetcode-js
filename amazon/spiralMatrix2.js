/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
] */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let dir = 0;
  let x = 0;
  let y = 0;

  for (let i = 1; i <= n * n; i++) {
    res[x][y] = i;
    // calculat next
    x = x + dx[dir];
    y = y + dy[dir];
    // Out of bound or Already populates
    if (x < 0 || y < 0 || x >= n || y >= n || res[x][y] !== 0) {
      //Go back
      x = x - dx[dir];
      y = y - dy[dir];
      // new direction
      dir = (dir + 1) % 4;
      // recalculate next
      x = x + dx[dir];
      y = y + dy[dir];
    }
  }
  return res;
};
