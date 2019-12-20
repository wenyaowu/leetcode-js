"""
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
"""


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]
        if not nums:
            return res

        for n in numbers:
            temp = []
            for r in res:
                temp.append(r)
                temp.append([n])
                temp.append(r + [n])
            res = temp
        return res