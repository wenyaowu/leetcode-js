"""
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
"""


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if not board or not board[0]:
            return False
        for i in range(len(board)):
            for j in range(len(board[0])):
                if self.helper(board, i, j, 0, word):
                    return True

    def helper(self, board, x, y, idx, word):
        if idx == len(word):
            return True
        m, n = len(board), len(board[0])
        if x < 0 or y < 0 or x >= m or y >= n or board[x][y] == '*':
            return False

        if board[x][y] == word[idx]:
            board[x][y] = '*'
            found = self.helper(board, x+1, y, idx+1, word) or self.helper(board, x-1, y, idx+1, word) or self.helper(board, x, y+1, idx+1, word) or self.helper(board, x, y-1, idx+1, word)
            board[x][y] = word[idx]
            return found
        return False