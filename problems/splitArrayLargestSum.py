"""
Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
"""


class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        lo = max(nums)
        hi = sum(nums)
        while lo < hi:
            mid = (lo+hi)//2
            if self.split(mid, nums, m):  # Can be split into equal or more than m partitions
                # mid words, we want to be greedy, try smaller sum
                hi = mid
            else:
                # mid doesn't work, move to mid+1
                lo = mid + 1
        return lo

    def split(self, target, nums, m):
        currentSum = 0
        partitions = 1
        for num in nums:
            currentSum += num
            if currentSum > target:
                partitions += 1
                currentSum = num
                if partitions > m:
                    return False
        return True
