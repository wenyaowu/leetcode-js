"""
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
"""


class Solution:

    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return None
        # 2 bits -> next, current
        # 00, 01, 10, 11
        m = len(board)
        n = len(board[0])
        for i in range(m):
            for j in range(n):
                neighbors = self.countNeighbors(board, i, j, m, n)
                if board[i][j] == 1:
                    if neighbors == 2 or neighbors == 3:
                        board[i][j] = 3
                    else:
                        board[i][j] = 1
                else:
                    if neighbors == 3:
                        board[i][j] = 2
        for i in range(m):
            for j in range(n):
                board[i][j] = 1 if board[i][j] & 2 > 0 else 0  
        
                        
    def countNeighbors(self, board, x, y, m, n):
        liveCounts = 0
        for i in range(-1, 2):
            for j in range(-1, 2):
                currentX = x + i
                currentY = y + j

                if i == 0 and j == 0:
                    continue
                if currentX < 0 or currentY < 0 or currentX >= m or currentY >= n:
                    continue
                if board[currentX][currentY] & 1:
                    liveCounts += 1
                
        return liveCounts
