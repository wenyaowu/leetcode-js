/* 
Given a non negative integer number num. 
For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in 
their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). 
But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (num === 0) {
    return [0];
  }
  const dp = new Array(num + 1).fill(0);
  dp[1] = 1;

  let currentBase = 2;
  for (let i = 2; i < num + 1; i++) {
    if (isPowerOfTwo(i)) {
      currentBase = i;
    }
    dp[i] = 1 + dp[i % currentBase];
  }
  return dp;
};
function isPowerOfTwo(num) {
    return (num & (num-1)) == 0;
}