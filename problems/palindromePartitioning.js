/**
 * 
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (!s) {
    return [];
  }
  let res = [];
  helper(s, 0, [], res);
  return res;

  function helper(s, idx, currentPartition, res) {
    // idx is the start of the next partition point
    if (idx >= s.length) {
      res.push(currentPartition);
      return;
    }
    for (let i = idx; i < s.length; i++) {
      let currentSubstirng = s.substring(idx, i + 1);
      if (isPalindrome(currentSubstirng)) {
        helper(s, i + 1, [...currentPartition, currentSubstirng], res);
      }
    }
  }
};

const isPalindrome = function(s) {
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
