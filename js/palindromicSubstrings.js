/**
 * 
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    let m = s.length;
    const dp = new Array(m).fill(0).map(()=>new Array(m).fill(false));
    for(let i = 0; i<m; i++) {
        for(let j =0; j<=i; j++) {
            dp[i][j] = s[i] === s[j] && (i-j <2 || dp[i-1][j+1]);
            if(dp[i][j]) {
                count+=1;
            }
        }
    }
    return count;
};