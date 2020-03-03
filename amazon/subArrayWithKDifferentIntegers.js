/*
Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.

(For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)

Return the number of good subarrays of A.

 

Example 1:

Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
Example 2:

Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Note:

1 <= A.length <= 20000
1 <= A[i] <= A.length
1 <= K <= A.length */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
  const lookup = new Array(A.length + 1).fill(0); // Occurance
  let prefix = 0;
  let right = 0;
  let left = 0;
  let currentDistinct = 0;
  let res = 0;
  // We always wanna keep our window to contain <= K distinct values cause those are possible answer
  // Once we find out there are > K distince values, we first need to shrink the window so the window contains possible answer again
  while (right < A.length) {
    if (lookup[A[right]] === 0) {
      currentDistinct += 1;
    }
    lookup[A[right]] += 1;
    // Maintain window that only has <= K distince values
    if (currentDistinct > K) {
      // The window maintain the minumum number of elements to have K distinct values.
      // Therefore mobving left by one will decease the current distinct values
      lookup[A[left]] -= 1;
      currentDistinct -= 1;
      // All the prefix will casue K+1 values
      prefix = 0;
      left += 1;
    }
    // Process the window so the window has minimum number of element to keep distinct values
    while (lookup[A[left]] > 1) {
      prefix += 1;
      lookup[A[left]] -= 1;
      left += 1;
    }
    if (currentDistinct === K) {
      res += 1 + prefix;
    }
    right += 1;
  }
  return res;
};

console.log(
  subarraysWithKDistinct(
    [5, 7, 5, 2, 3, 3, 4, 1, 5, 2, 7, 4, 6, 2, 3, 8, 4, 5, 7],
    7
  )
);
