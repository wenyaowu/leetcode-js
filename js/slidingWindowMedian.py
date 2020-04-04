"""
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
Answers within 10^-5 of the actual value will be accepted as correct.
"""
import heapq

class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        res = []
        low = []
        high = []
        
        for idx, num in enumerate(nums):
            self.add(num, low, high)
            if idx - k >= 0:
                self.remove(nums[idx-k], low, high)
            if idx - k + 1 >= 0:
                res.append(self.median(low, high))
        return res
            
    def add(self, num, low, high):
        
        temp = heapq.heappushpop(low, -num)
        heapq.heappush(high, -temp)
        if len(high) > len(low):
            heapq.heappush(low, -heapq.heappop(high))
        
        
    def remove(self, num, low, high):
        if num <= self.median(low, high): # in the left
            low.remove(-num)
        else:
            high.remove(num)
        heapq.heapify(low)
        heapq.heapify(high)
        
        # Balance
        if len(low) - len(high) == 2:
            heapq.heappush(high, -heapq.heappop(low))
        elif len(low) < len(high):
            heapq.heappush(low, -heapq.heappop(high))
        
        
    
    def median(self, low, high):
        if len(low) > len(high):
            return -low[0]
        else:
            return (-low[0] + high[0]) / 2
        