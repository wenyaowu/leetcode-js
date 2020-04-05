"""
Given an array nums of n integers, 
are there elements a, b, c in nums 
such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.


Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
"""


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if not nums:
            return []
        nums.sort()
        res = []
        for i in range(len(nums)-2):
            if i == 0 or nums[i] != nums[i-1]:
                target = -nums[i]
                head = i+1
                tail = len(nums)-1
                while head < tail:
                    if nums[head] + nums[tail] == target:
                        res.append([nums[i], nums[head], nums[tail]])
                        while head < tail and nums[head] == nums[head+1]:
                            head += 1
                        while head < tail and nums[tail] == nums[tail-1]:
                            tail -= 1
                        head += 1
                        tail -= 1
                    elif nums[head] + nums[tail] < target:
                        head += 1
                    else:
                        tail -= 1
        return res
