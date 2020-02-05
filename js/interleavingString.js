/**
 * 
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    if(m+n !== s3.length) {
        return false;
    }
    const dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(false));
    dp[0][0] = true;
    // initialize
    for(let i = 1; i <dp.length; i++) { // if only match s1
        let idx = i-1;
        if(s1[idx] === s3[idx]) {
            dp[i][0] = dp[i-1][0]
        }
    }
    for(let j =0; j<dp[0].length; j++) {
        let idx = j-1;
        if(s2[idx] === s3[idx]) {
            dp[0][j] = dp[0][j-1];
        }
    }

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[0].length; j++) {
            let s1idx = i-1;
            let s2idx = j-1;
            let s3idx = s1idx+s2idx+1;
            if(s1[s1idx] === s3[s3idx]) {
                dp[i][j] = dp[i][j] || dp[i-1][j];
            }
            if(s2[s2idx] === s3[s3idx]) {
                dp[i][j] = dp[i][j] || dp[i][j-1];
            }
        }
    }
    return dp[m][n];
};