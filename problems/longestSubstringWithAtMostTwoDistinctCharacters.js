/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5. */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let count = 0; // To count how many distinct chars are in the current substring
  const dict = {};
  let maxLength = 0;
  let high = 0;
  let low = 0;
  while (high < s.length) {
    let c = s[high];
    if (!dict[c]) {
      dict[c] = 0;
      count += 1;
    }
    dict[c] += 1;
    while (count > 2) {
      let remove = s[low];
      dict[remove] -= 1;
      if (dict[remove] === 0) {
        count -= 1;
      }
      low += 1;
    }

    if (high - low + 1 > maxLength) {
      maxLength = high - low + 1;
    }
    high += 1;
  }
  return maxLength;
};
