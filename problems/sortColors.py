"""
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
"""

"""
[0,0,0,1,0]   -->   [0,0,0,0,1]
     t   c                   c
[0,0,0,0,0]   -->   [0,0,0,0,0]
       t c                   c


  [0,0,2,1,1,2]
       c     h
     t
"""


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeroTail = -1
        twoHead = len(nums)
        currentPointer = 0
        while currentPointer < twoHead:
            if nums[currentPointer] == 0:
                # swap with zeroTail
                temp = nums[zeroTail+1]
                nums[zeroTail+1] = nums[currentPointer]
                nums[currentPointer] = temp
                zeroTail += 1
                currentPointer += 1
            if nums[currentPointer] == 1:
                currentPointer += 1
            if nums[currentPointer] == 2:
                temp = nums[twoHead-1]
                nums[twoHead-1] = nums[currentPointer]
                nums[currentPointer] = temp
                twoHead -= 1
