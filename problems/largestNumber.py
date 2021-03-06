from functools import cmp_to_key
"""
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
"""
def compare(num1, num2):
        return int(str(num2) + str(num1)) - int(str(num1) + str(num2))

class Solution:

    def largestNumber(self, nums: List[int]) -> str:
        nums = sorted(nums, key = cmp_to_key(compare))

        res = ""

        if nums[0] == 0:
            return "0"
        
        for n in nums:
            res += str(n)
        return res