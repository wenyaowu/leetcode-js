"""
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
"""


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not nums:
            return 0
        maxProduct = nums[0]
        currentMax = nums[0]
        currentMin = nums[0]

        for num in nums[1::]:
            # need to save in temp so it doesn't override
            tempCurrentMax = max(currentMax*num, currentMin*num, num)
            tempCurrentMin = max(currentMax*num, currentMin*num, num)
            maxProduct = max(maxProduct, tempCurrentMax)
            currentMax = tempCurrentMax
            currentMin = tempCurrentMin
        return maxProduct
