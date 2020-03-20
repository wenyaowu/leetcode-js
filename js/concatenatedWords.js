/*
Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter. */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const sorted = words.sort((a, b) => a.length - b.length);
  const res = [];
  const wordDict = {};
  for (let word of sorted) {
    if (wordbreak(word)) {
      res.push(word);
    }
    wordDict[`_${word}`] = true;
  }

  return res;

  function wordbreak(s) {
    if (!s) {
      return false;
    }
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < i; j++) {
        let sub = s.substring(j, i);
        if (wordDict[`_${sub}`] && dp[j]) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[n];
  }
};
