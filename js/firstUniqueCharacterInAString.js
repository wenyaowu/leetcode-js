/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters. */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const lookup = {};
  for (let char of s) {
    if (!lookup[char]) {
      lookup[char] = 1;
    } else {
      lookup[char] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
