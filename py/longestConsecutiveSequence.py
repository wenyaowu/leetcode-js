"""
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
"""


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        lookup = {}
        maxLength = 0
        """
        4 possibilities:
        (1) find left (previous) number
        (2) find right (next) number
        (3) find both left and right
        (4) find none
        """
        for n in nums:
            if n not in lookup.keys(): # Avoid Duplicate
                # Left
                left = lookup[n-1] if n-1 in lookup.keys() else 0
                # right
                right = lookup[n+1] if n+1 in lookup.keys() else 0

                currentLength = 1+left+right
                maxLength = max(maxLength, currentLength)
                lookup[n] = currentLength

                if left:  # Update the leftest number (Update edge)
                    lookup[n-left] = currentLength
                if right:
                    lookup[n+right] = currentLength
        return maxLength