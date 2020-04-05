"""
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
"""

"""
[0,1,2,3,4]
    k = 2
[3,4,0,1,2]

f(x) = (prev + k) % n 
[0, 1, 2, 3, 4, 5]
[4, 5, 0, 1, 2, 3]

0 -> 2 -> 4 -> 0
"""


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count = 0
        start = 0
        currentIndex = 0
        currentNumber = nums[0]

        while True:

            nextIndex = (currentIndex+k) % len(nums)
            # Move number and save the number into curr number
            temp = nums[nextIndex]
            nums[nextIndex] = currentNumber
            currentNumber = temp
            currentIndex = nextIndex
            # Update count for moved number
            count += 1
            if count == len(nums):
                return

            if currentIndex == start:
                start += 1
                currentIndex = start
                currentNumber = nums[start]
                

            
