/**
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums) {
    return 0;
  }
  const lookup = {};
  let maxLength = 0;
  for (let num of nums) {
    if (lookup[num] === undefined) { // <---- Make sure no duplication, otherwise we will caculate twice
      let left = lookup[num - 1] ? lookup[num - 1] : 0;
      let right = lookup[num + 1] ? lookup[num + 1] : 0;
      let currentLength = left + right + 1;
      lookup[num] = currentLength;
      maxLength = currentLength > maxLength ? currentLength : maxLength;
      if (left) {
        lookup[num - left] = currentLength;
      }
      if (right) {
        lookup[num + right] = currentLength;
      }
    }
  }
  return maxLength;
};
