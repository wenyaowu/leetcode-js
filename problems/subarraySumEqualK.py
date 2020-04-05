"""
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
"""
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        lookup = {} # this saves how many times k (key) occurs of previous sum sum(nums[0:i+1])
        lookup[0] = 1 # **Key
        sum = 0
        res = 0
        for num in nums:
            sum+=num
            if sum-k in lookup:
                res+=lookup[sum-k]
            if sum in lookup:
                lookup[sum] += 1
            else:
                lookup[sum] = 1
        return res