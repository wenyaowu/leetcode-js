"""
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
"""
import math
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)-1
        while left <= right:
            mid = int((left + right) / 2)
            if nums[mid] == target:
                return mid
            # find which side is sorted
            if nums[mid] >= nums[left]: # Left side sorted
                if nums[left] <= target < nums[mid]: # Target in the left
                    right = mid -1
                else:
                    left = mid + 1
            else: # right side sorted
                if nums[mid] < target <= nums[right]: # In Right
                    left = mid + 1
                else:
                    right = mid -1
        return -1
