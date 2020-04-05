/**
 * We have two integer sequences A and B of the same non-zero length.

We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.

At the end of some number of swaps, A and B are both strictly increasing.  (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  It is guaranteed that the given input always makes it possible.

Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
Note:

A, B are arrays with the same length, and that length will be in the range [1, 1000].
A[i], B[i] are integer values in the range [0, 2000].
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  // DP represent min swap for each index
  const n = A.length;
  const dpSwap = new Array(n).fill(0); // Minimum swap to swap i, including swapping i
  const dpFixed = new Array(n).fill(0); //Minimum swap to fix i

  // initila value
  dpSwap[0] = 1; //Swapping A[0] and B[0]
  dpFixed[0] = 0; // Do nothing

  for (let i = 1; i < n; i++) {
    if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
      // it is out of order, we need to do whatever is opposite to n-1
      // if we swap i-1, we need to fix i, vise versa
      dpSwap[i] = dpFixed[i - 1] + 1;
      dpFixed[i] = dpSwap[i - 1];
    } else if (A[i - 1] >= B[i] || B[i - 1] >= A[i]) {
      // In this case, if we swap i-1, we will need to swap i
      // If we fix i-1, we will need to fix i too
      dpSwap[i] = dpSwap[i - 1] + 1;
      dpFixed[i] = dpFixed[i - 1];
    } else {
      // either way works, just pick the minimum
      let min = Math.min(dpSwap[i - 1], dpFixed[i - 1]);
      dpSwap[i] = min + 1;
      dpFixed[i] = min;
    }
  }

  return Math.min(dpSwap[n - 1], dpFixed[n - 1]);
};
