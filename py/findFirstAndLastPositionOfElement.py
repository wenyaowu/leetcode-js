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
        if not nums or not len(nums):
            return [-1, -1]
        res = [-1, -1]
        # Find left
        lo = 0
        hi = len(nums)-1
        while lo < hi:
            mid = (lo+hi)//2
            if nums[mid] >= target:
                hi = mid
            else:
                lo = mid+1
        if nums[lo] != target:
            return res
        res[0] = lo
        # We don't need to reset lo becasue it's the leftest element
        hi = len(nums)-1
        while lo < hi:
            mid = (lo+hi+1)//2  # Pick towards right
            if nums[mid] <= target:
                lo = mid  # Keep mid on left
            else:
                hi = mid - 1
        res[1] = lo
        return res