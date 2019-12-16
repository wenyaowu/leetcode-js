"""
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], 
therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
"""
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        """
            use dp?
            (i = 0 ~ n)
            dp[n] = max(dp[n], dp[i] + 1) if nums[i] < nums[n]
        """
        if not nums:
            return 0
        n = len(nums)
        dp = [1 for i in range(n)]
        dp[0] = 1
        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j]+1)
        return max(dp)