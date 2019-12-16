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
"""

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        count = 0 # How many elements have been moved
        for i in range(n): # i dictate starting point
            currenValue = nums[i]
            start = i
            prevIndex = i 
            while True:
                nextIndex = (prevIndex + k) % n
                tempValue = nums[nextIndex]
                nums[nextIndex] = currenValue
                currenValue = tempValue
                prevIndex = nextIndex
                count += 1
                if prevIndex == start:
                    break
            if count == n:
                break
