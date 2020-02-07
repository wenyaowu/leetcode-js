/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i < dp[0].length; i++) {
    if (p[i - 1] === "*") {
      dp[0][i] == dp[0][i - 2];
    }
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      const stringIdx = i - 1;
      const patternIdx = j - 1;
      if (s[stringIdx] === p[patternIdx] || p[patternIdx] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[patternIdx] === "*") {
        dp[i][j] = dp[i][j - 2];
        if (p[patternIdx - 1] === s[stringIdx] || p[patternIdx - 1] === ".") {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};


/**
 *    dp[i][j]          dp[i-1][j]         dp[(i-1)-1][j]
 * baaa <-> ba*   ===  baa <-> ba*   ===  ba <-> ba*
 * 
 */