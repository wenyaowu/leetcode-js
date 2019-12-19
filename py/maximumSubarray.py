"""
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],

Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding 
another solution using the divide and conquer approach, which is more subtle.
"""

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums:
            return None
        maxSum = nums[0]
        currentSum = nums[0]

        for i in nums[1::]:
            # If sum for previous subarray is negative, restart
            if currentSum < 0:
                currentSum = i
            else:
                currentSum += i
            maxSum = max(currentSum, maxSum)
        return maxSum
