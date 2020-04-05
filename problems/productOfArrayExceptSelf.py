"""
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
"""


"""
[1,2,3,4]
<---all the numbers to the left [1, 1*1, 1*2, 1*2*3]
 times 
--->all the numbers to the right  [2*3*4 ,3*4, 4, 1]
"""


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left = [1 for i in range(n)]
        right = [1 for i in range(n)]
        for i in range(1, n):
            left[i] = left[i-1] * nums[i-1]
            right[n-i-1] = right[n-i] * nums[n-i]
        return [a*b for a, b in zip(left, right)]
