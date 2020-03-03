/*
Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.
https://leetcode.com/problems/subarrays-with-k-different-integers

Example 1:

Input: s = "pqpqs", k = 2
Output: 7
Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]
Example 2:

Input: s = "aabab", k = 3
Output: 0
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26 */

function kDistinctCharacters(s, k) {
  const lookup = new Array(26).fill(0);
  let right = 0;
  let left = 0;
  let prefix = 0;
  let distinct = 0;
  let res = 0;
  while (right < s.length) {
    if (lookup[charToNum(s[right])] === 0) {
      distinct += 1;
    }
    lookup[charToNum(s[right])] += 1;

    if (distinct > k) {
      lookup[charToNum(s[left])] -= 1;
      prefix = 0;
      distinct -= 1;
      left += 1;
    }
    while (lookup[charToNum(s[left])] > 1) {
      // Shrink window to contain minimum window
      lookup[charToNum(s[left])] -= 1;
      left += 1;
      prefix += 1;
    }

    if (distinct === k) {
      res += prefix + 1;
    }

    right += 1;
  }
  return res;
}

function charToNum(char) {
  return char.charCodeAt(0)-97;
}


console.log(kDistinctCharacters("pqpqs", 2));
console.log(kDistinctCharacters("aabab", 3));