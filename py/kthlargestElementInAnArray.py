"""
Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
"""
import random

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pivot = random.choice(nums)
        left = []
        right = []
        for n in nums:
            if n > pivot:
                left.append(n)
            elif n < pivot:
                right.append(n)

        if len(left) > k-1:
            return self.findKthLargest(left, k)
        elif len(nums) - len(right) < k:
            return self.findKthLargest(right, k-(len(nums)-len(right)))
        return pivot

            
