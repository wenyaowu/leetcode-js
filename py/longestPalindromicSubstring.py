"""
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
"""

class Solution:
    def longestPalindrome(self, s: str) -> str:
        # DP: 2d array, dp[i][j] represent s[i:j] is palindrome or not
        # Formula: dp[i][j]: s[i] == s[j] and dp[i+1, j-1] is true or i-j < 2
        maxLength = 0
        longestSubstring = ""
        n = len(s)
        dp = [[False for i in range(n)] for i in range(n)]
        for i in range(n):
            for j in range(i):
                # Review and understand this equation
                if (i-j < 2 and dp[i-1][j+1]) or s[i] == s[j]:
                    dp[i][j] = True
                    currentSubstring = s[i:j+1]
                    if len(currentSubstring) > maxLength:
                        maxLength = len(currentSubstring)
                        longestSubstring = currentSubstring
        return longestSubstring
                