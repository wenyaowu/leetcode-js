"""
Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south).

 

Example 1:



Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow. 
Example 2:



Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
Output: 2
Example 3:



Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
Output: 3
"""
import heapq

class Cell:
    def __init__(self, x, y, currentPathValue):
        self.x = x
        self.y = y
        self.currentPathValue = currentPathValue
    def __lt__(self, other):
        return self.currentPathValue > other.currentPathValue



class Solution:
    def maximumMinimumPath(self, A: List[List[int]]) -> int:
        # It's similar to BFS but we aim for going to the next largest one to try to step on small items
        # So instead of going node in the queue by order, we are using priority queue to find the next biggest value in the queue
        # Whenever we reach a node, we are going through the maximum possible path to reach it
        m = len(A)
        n = len(A[0])
        heap = []
        visited = [[False for i in range(n)] for i in range(m)]
        heapq.heappush(heap, Cell(0,0,A[0][0]))
        dx = [1, -1, 0, 0]
        dy = [0, 0, 1, -1]
        
        while len(heap):
            current = heapq.heappop(heap)
            visited[current.x][current.y] = True
            if current.x == m-1 and current.y == n-1:
                return min(current.currentPathValue, A[m-1][n-1])
            for d in range(4):
                xn = current.x + dx[d]
                yn = current.y + dy[d]
                if xn < 0 or yn < 0 or xn >= m or yn >= n or visited[xn][yn]:
                    continue
                heapq.heappush(heap, Cell(xn, yn, min(current.currentPathValue, A[xn][yn])))