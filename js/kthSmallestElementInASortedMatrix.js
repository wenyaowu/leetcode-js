/**
 * 
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  if (!matrix || !matrix[0]) {
    return -1;
  }

  let m = matrix.length;
  let n = matrix[0].length;
  let l = matrix[0][0];
  let h = matrix[m - 1][n - 1];
  while (l < h) {
    let mid = Math.floor((l + h) / 2);
    let smallerOrEquals = countSmallerOrEqualThan(mid, matrix); // Count smaller or equal
    if (smallerOrEquals > k - 1) {
      h = mid; // Inclue the current number, cuz it can be the answer
    } else {
      l = mid + 1;
    }
  }
  return l;
};

function countSmallerOrEqualThan(mid, matrix) {
  // Remember to count equal to since we are counting kth element, cant skip equal
  let count = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    let j = 0;
    while (matrix[i][j] <= mid && j < n) {
      count += 1;
      j += 1;
    }
  }
  return count;
}
