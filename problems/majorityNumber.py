"""
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
"""

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hash = {}
        n = len(nums)
        for i in nums:
            if i not in hash:
                hash[i] = 1
            else:
                hash[i] += 1
            if hash[i] > n/2:
                return i