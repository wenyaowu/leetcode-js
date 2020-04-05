"""
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
In one step you can walk in any of the four directions top, bottom, left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:

Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6
 

Example 2:

Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
 

Example 3:

Input: 
[
 [2,3,4],
 [0,0,5],
 [8,7,6]
]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
 

Constraints:

1 <= forest.length <= 50
1 <= forest[i].length <= 50
0 <= forest[i][j] <= 10^9 */
"""
"""
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
In one step you can walk in any of the four directions top, bottom, left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:

Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6
 

Example 2:

Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
 

Example 3:

Input: 
[
 [2,3,4],
 [0,0,5],
 [8,7,6]
]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
 

Constraints:

1 <= forest.length <= 50
1 <= forest[i].length <= 50
0 <= forest[i][j] <= 10^9 */
"""
class Tree:
    def __init__(self, x, y, h):
        self.x = x
        self.y = y
        self.h = h
    def __lt__(self, other):
        return self.h < other.h

import heapq


class Solution(object):
    def cutOffTree(self, forest):
        """
        :type forest: List[List[int]]
        :rtype: int
        """
        if not forest or not forest[0]:
            return -1
        m = len(forest)
        n = len(forest[0])
        heap = []
        steps = 0
        
        # Add all tree to the heap
        for i in range(m):
            for j in range(n):
                if forest[i][j] > 1:
                    heapq.heappush(heap, Tree(i, j, forest[i][j]))
        
        start = (0, 0)

        while len(heap):
            next = heapq.heappop(heap)
            s = self.bfs(start, (next.x, next.y), forest)
            if s == -1:
                return -1
            else:
                steps += s
                start = (next.x, next.y)
        
        return steps
                

    def bfs(self, start, end, matrix):
        dx = [0, 0, 1, -1]
        dy = [1, -1, 0, 0]
        m = len(matrix)
        n = len(matrix[0])
        queue = [start]
        level = 0
        visited = [[False for j in range(n)] for i in range(m)]
        while len(queue):
            size = len(queue)
            for i in range(size):
                current = queue.pop(0)
                x = current[0]
                y = current[1]
                if x == end[0] and y == end[1]:
                    return level
                if visited[x][y]:
                    continue
                visited[x][y] = True
                for k in range(4):
                    xn = x + dx[k]
                    yn = y + dy[k]
                    if xn < 0 or yn < 0 or xn >= m or yn >= n or visited[xn][yn] or matrix[xn][yn] == 0:
                        continue
                    queue.append((xn, yn))
            level+=1
        return -1
                
                