"""
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
"""
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        lookup = {}
        for n in nums:
            if n not in lookup.keys():
                lookup[n] = 1
            else:
                lookup[n] += 1
        for i in lookup.keys():
            if lookup[i] == 1:
                return i
                