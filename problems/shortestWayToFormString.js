/**
 * 
From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).

Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

 

Example 1:

Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
Example 2:

Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
Example 3:

Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 

Constraints:

Both the source and target strings consist of only lowercase English letters from "a"-"z".
The lengths of source and target string are between 1 and 1000.
 */
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  // For each segment, we keep moving pointer at target (j) until j === target.length
  // If src[i] === tar[j] => i+=1, j+=1
  // If src[i] !== tar[j] => j+=1
  // Every time j reachs the end of source string, res += 1, reset j
  // How to check -1? => create an existed array, check each charactor
  let res = 0;
  const exists = new Array(26).fill(false);
  for (let char of source) {
    exists[charToNum(char)] = true;
  }
  let ps = 0;
  let pt = 0;
  while (pt < target.length) {
    if (!exists[charToNum(target[pt])]) {
      return -1;
    }
    // For each char in target: Try to match source
    // (1) if target[i] === source[ps], move on to next char in target, ps++ i++
    // (2) if targer[i] !== source[ps], keep moving ps until target[i] === source[ps] and move on ps++, i++
    if (target[pt] === source[ps]) {
      pt += 1;
      ps += 1;
    }
    while (ps < source.length && target[pt] !== source[ps]) {
      ps += 1;
    }
    if (ps === source.length) {
      res += 1;
      ps = 0;
    }
  }
  return res;
};

var charToNum = function(char) {
  return char.charCodeAt(0) - 97;
};
