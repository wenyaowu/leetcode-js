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
  res = [];
  helper(s, 0, []);

  function helper(s, currentIndex, currentPatitions) {
    if (currentIndex === s.length) {
      res.push(currentPatitions);
    }

    for (let i = 1; currentIndex + i <= s.length; i++) {
      let currentSubstring = s.substring(currentIndex, currentIndex + i);
      if (isPalindrome(currentSubstring)) {
        
        helper(s, currentIndex + i, [...currentPatitions, currentSubstring]);
      }
    }
  }
  return res;
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
