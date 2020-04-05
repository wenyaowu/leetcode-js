"""
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
"""

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if not numRows:
            return []
        res = [[1]]
        for i in range(1, numRows):
            temp = [0] + res[-1] + [0]
            for i in range(0, len(temp)-1):
                temp[i] = temp[i]+temp[i+1]
            res.append(temp[0:-1])
        return res
        