"""
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
"""

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        if not board or not board[0]:
            return []
        res = []
        root = self.buildTrie(words)
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.helper(i, j, root, board, res)
        return res

    def helper(self, x, y, node, board, res):
        m,n = len(board), len(board[0])
        
        char = board[x][y]
        
        if board[x][y] == '*' or not node.next[ord(char)-97]:
            return
        
        node = node.next[ord(char)-97]
        if node.word:
            res.append(node.word)
            node.word = None # Prevent duplicate
        board[x][y] = '*'
        if x+1 < m:
            self.helper(x+1, y, node, board, res)
        if x-1 >= 0:
            self.helper(x-1, y, node, board, res)
        if y+1 < n:
            self.helper(x, y+1, node, board, res)
        if y-1 >= 0:
            self.helper(x, y-1, node, board, res)
        board[x][y] = char

        

    def buildTrie(self, words):
        root = TrieNode()
        for w in words:
            p = root
            for char in w:
                i = ord(char)-97
                if not p.next[i]:
                    p.next[i] = TrieNode()
                p = p.next[i]
            p.word = w
        return root

class TrieNode:
    def __init__(self):
        self.next = [None for i in range(26)]
        self.word = None
        
        
    