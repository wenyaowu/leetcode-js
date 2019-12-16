"""
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands. An island is surrounded by water and is
formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
"""


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]:
            return 0
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if(grid[i][j] == '1'):
                    count += 1
                    self.flood(i, j, len(grid), len(grid[i]), grid)
        return count

    def flood(self, x, y, m, n, grid):
        if x < 0 or y < 0 or x >= m or y >= n or grid[x][y] != '1':
            return
        grid[x][y]='*'
        self.flood(x+1, y, m, n, grid)
        self.flood(x-1, y, m, n, grid)
        self.flood(x, y+1, m, n, grid)
        self.flood(x, y-1, m, n, grid)
