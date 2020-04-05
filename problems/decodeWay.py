"""
A message containing letters from A-Z is being encoded to 
numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, 
determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
"""


class Solution:
    def numDecodings(self, s: str) -> int:
        """
        ex: 226
        dp[0] (2) = 1
        dp[1] (22) = 2
        dp[2] (226) = 3
        """
        if not s or s[0] == '0':
            return 0
        if len(s) == 1:
            return 1

        dp = [1 for i in range(len(s)+1)]

        for i in range(2, len(s)+1):
            ways = 0
            # if s[i] == '0'
            if s[i-1] == "0":
                if 10 <= int(s[i-2:i]) <= 26:
                    ways += dp[i-2]
            else:
                ways += dp[i-1]
                if 10 <= int(s[i-2:i]) <= 26:
                    ways += dp[i-2]
            dp[i] = ways
        
        return dp[len(s)]
