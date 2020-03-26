"""
Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

Example:

Given the following 3x6 height map:
[
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

Return 4.
"""
class Cell:
    def __init__(self, x, y, wallHeight):
        self.x = x
        self.y = y
        self.wallHeight = wallHeight
    def __lt__(self, other):
        return self.wallHeight < other.wallHeight

import heapq
class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        heap = []
        water = 0
        m = len(heightMap)
        n = len(heightMap[0])
        visited = [[False for i in range(n)] for i in range(m)]
        self.init(heightMap, heap, visited)
        dx = [0, 0, -1, 1]
        dy = [1, -1, 0, 0]


        while len(heap):
            current = heapq.heappop(heap)
            for i in range(4):
                xn = current.x + dx[i]
                yn = current.y + dy[i]
                if xn < 0 or yn < 0 or xn >= m or yn >= n or visited[xn][yn]:
                    continue
                visited[xn][yn] = True
                water += (current.wallHeight - heightMap[xn][yn]) if current.wallHeight > heightMap[xn][yn] else 0
                heapq.heappush(heap, Cell(xn, yn, max(current.wallHeight, heightMap[xn][yn])))

        return water


    def init(self, heightMap, heap, visited):
        m = len(heightMap)
        n = len(heightMap[0])
        for i in range(m):
            heapq.heappush(heap, Cell(i, 0, heightMap[i][0]))
            heapq.heappush(heap, Cell(i, n-1, heightMap[i][n-1]))
            visited[i][0] = True
            visited[i][n-1] = True
        for i in range(1, n-1):
            heapq.heappush(heap, Cell(0, i, heightMap[0][i]))
            heapq.heappush(heap, Cell(m-1, i, heightMap[m-1][i]))
            visited[0][i] = True
            visited[m-1][i] = True