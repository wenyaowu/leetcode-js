"""
Given a positive integer n, find the least number of perfect square numbers 
(for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:
Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
"""

"""
    we know dp[0] = 0
    so -> we know dp[1], dp[4], dp[9]...(Only need to calculate when 0 + j * j <= n)
    dp[1] -> dp[2], dp[5], dp[10]
    
    ex:
    min(
    dp[11] + 1 (1*1) -> dp[12]
    dp[8] + 1 (2*2) -> dp[12]
    dp[3] + 1 (3*3) -> dp[12]
    )
"""


class Solution:
    def numSquares(self, n: int) -> int:
        dp = [sys.maxsize for i in range(n+1)]  # 0 -> n
        dp[0] = 0
        for i in range(n+1):
            j = 1
            while i + j*j <= n:
                dp[i + j * j] = min(dp[i + j * j], dp[i] + 1)
                j += 1
        return dp[-1]