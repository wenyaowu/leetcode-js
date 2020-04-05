"""
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
"""


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return
        for i in range(0, len(board)):
            self.helper(i, 0, board)
            self.helper(i, len(board[0])-1, board)
        
        for j in range(0, len(board[0])):
            self.helper(0, j, board)
            self.helper(len(board)-1, j, board)

        for i in range(0, len(board)):
            for j in range(0, len(board[0])):
                if board[i][j] == '*':
                    board[i][j] = 'O'
                elif board[i][j] == 'O':
                    board[i][j] = 'X'

    def helper(self, x, y, board):
        m, n = len(board), len(board[0])
        if x < 0 or y < 0 or x >= m or y >= n or board[x][y] == '*' or board[x][y] == 'X':
            return
        if board[x][y] == 'O':
            board[x][y] = '*'
            self.helper(x+1, y, board)
            self.helper(x-1, y, board)
            self.helper(x, y+1, board)
            self.helper(x, y-1, board)

