/**
 * 
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = new Array(s.length+1).fill(0).map(()=>new Array(p.length+1).fill(false));
    dp[0][0] = true;
    for(let j = 1; j<dp[0].length; j++) { // Only possible if the string starts with *
        const charidx = j-1;
        if(p[charidx] === "*") {
            dp[0][j] = dp[0][j-1];
        }
        else {
            break;
        }
    }
    
    for(let i = 1; i<dp.length; i++) {
        for(let j = 1; j<dp[0].length; j++) {
            let sidx = i-1; // index for the string
            let pidx = j-1;
            if(s[sidx] === p[pidx] || p[pidx] === "?") {
                dp[i][j] = dp[i-1][j-1];
            }
            else if (p[pidx] === '*') {
                dp[i][j] = dp[i][j-1] || dp[i-1][j];
            }
        }
    }
    return dp[s.length][p.length];
};