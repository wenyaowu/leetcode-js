/**
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

 

Example 1:



Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
 

Note:

1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const countA = new Array(8).fill(0);
  const countB = new Array(8).fill(0);
  const same = new Array(8).fill(0);
  const n = A.length;

  for (let i = 0; i < n; i++) {
    let a = A[i];
    let b = B[i];
    countA[a] += 1;
    countB[b] += 1;
    if (a === b) {
      same[a] += 1;
    }
  }

  for (let i = 1; i <= 7; i++) {
    if (countA[i] + countB[i] - same[i] === n) {
      return n - Math.max(countA[i], countB[i]);
    }
  }
  return -1;
};
