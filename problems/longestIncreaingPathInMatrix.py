"""
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
"""


class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        maxLength = 0
        if not matrix or not matrix[0]:
            return 0
        m, n = len(matrix), len(matrix[0])
        self.cache = [[-1 for j in range(n)] for i in range(m)]
        for i in range(m):
            for j in range(n):
                maxLength = max(self.dfs(matrix, i, j), maxLength)
        return maxLength

    def dfs(self, matrix, x, y):
        if self.cache[x][y] != -1:
            return self.cache[x][y]
        dx = [-1, 0, 1, 0]
        dy = [0, 1, 0, -1]
        currentLength = 1
        for i in range(4):
                xi = x+dx[i]
                yi = y+dy[i]
                if xi < 0 or yi < 0 or xi >= len(matrix) or yi >= len(matrix[0]) or matrix[x][y] >= matrix[xi][yi]:
                    continue
                currentLength = max(1+self.dfs(matrix, xi, yi), currentLength)
        self.cache[x][y] = currentLength
        return currentLength
