/**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];
  while (matrix.length > 0) {
    try {
      res = res.concat(matrix.shift());
      for (let row of matrix) {
        if (!row || row.length === 0) {
          break;
        }
        res.push(row.pop());
      }
      res = res.concat(matrix.pop().reverse());
      for (let row of matrix.slice().reverse()) { // ----> reverse() mutate the original array
        if (!row || row.length === 0) {
          break;
        }
        res.push(row.shift());
      }
    } catch (err) {
      break;
    }
  }
  return res;
};

