"""
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
"""


"""
Binary Search with 3 posibility:

Search left:
(1) target > mid -> the starting point must be on the right side (l = mid + 1)
(2) target < mid -> the starting point must be on the left side (r = mid -1)
(3) target == mid -> the starting must be mid or in the left side (r = mid)
merging (2) and (3) -> target <= r -> r = mid

Search right:
(1) target < mid -> the rightest point must fall in left (r = mid -1)
(2) target > mid -> the rightest point must fall in right (l = mid + 1)
(3) target == mid -> the rightest point must fall in right (l = mid)

"""
# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/14699/Clean-iterative-solution-with-two-binary-searches-(with-explanation)

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        res = [-1, -1]
        if len(nums) == 0:
            return res
        l = 0
        r = len(nums)-1
        while l<r:
            mid = int((l+r)/2)
            if target > nums[mid]:
                l = mid + 1
            else:
                r = mid
        if nums[l]!=target:
            return res
        res[0] = l

        r = len(nums)-1 # l is the leftest, we don't need to reset

        while l<r:
            mid = int((l+r)/2) + 1 
            # bias towards right so we don't stuck
            # ex: when the last 2 elements are: [3,3], 
            # (1) (l+r)/2 => l
            # (2) when nums[mid] == target: l = mid -> (1) (Infinite loop)
            if target < nums[mid]:
                r = mid -1
            else:
                l = mid
        res[1] = l
        return res