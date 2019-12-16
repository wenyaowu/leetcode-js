"""
Given an array nums containing n + 1 integers 
where each integer is between 1 and n (inclusive), 
prove that at least one duplicate number must exist. 
Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,5,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, 
but it could be repeated more than once.
"""


"""
[5,1,3,4,2]
[2,1,3,4,5]
[1,2,3,4,5]
"""

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        
        if not nums:
            return 
        # Move number to i = index
        # If we find out that the number we try to move equals the one is already there -> fund dups
        
        # nums[i] = i+1
        n = len(nums)
        currentIndex = 0
        while currentIndex < n:
            if(nums[currentIndex] == currentIndex+1):
                currentIndex += 1
                continue
            # Move current number to appropriate location
            if(nums[nums[currentIndex]-1] == nums[currentIndex]):
                return nums[currentIndex]
            else:
                temp = nums[nums[currentIndex]-1]
                nums[nums[currentIndex]-1] = nums[currentIndex]
                nums[currentIndex] = temp
        
        
