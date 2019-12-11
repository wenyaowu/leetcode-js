/**
 * Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
 */

 /**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // Each number -> Count how many 5s (2s always more than 2s)

  let res = 0;
  for (let i = 0; i < n; i++) {
      let currentNum = i+1;
      while(currentNum % 5 === 0) {
          res+=1;
          currentNum /= 5;
      }
  }

  return res;
    // 25! -> 1*2*3*4.....*25
    // 5, 10, 15, 20, 25
};