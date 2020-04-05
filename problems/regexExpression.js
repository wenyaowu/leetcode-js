/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

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
Output: false */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = new Array(s.length+1).fill(false).map(()=>new Array(p.length+1).fill(false));
    dp[0][0] = true;
    for(let j = 1; j<dp[0].length; j++) {
        if(p[j-1] === "*") {
            dp[0][j] = dp[0][j-2];  // Match "*a" <-> "", match to dp[0][0] cause "*a" can be 0
        }
    }
    
    for(let i = 1; i<dp.length; i++) {
        for(let j=1; j<dp[0].length; j++) {
            let sidx = i-1;
            let pidx = j-1;
            if(s[sidx] === p[pidx] || p[pidx] === '.') {
                dp[i][j] = dp[i-1][j-1];
            }
            else if (p[pidx] === '*') {
                dp[i][j] = dp[i][j-2]
                if(p[pidx-1] === s[sidx] || p[pidx-1] === '.'){
                    dp[i][j] = dp[i][j] || dp[i-1][j]
                }
            }
        }
    }
    return dp[s.length][p.length];
};