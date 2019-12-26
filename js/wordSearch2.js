/**
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
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (!board || !board[0]) {
    return [];
  }
  const res = [];
  const trie = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(i, j, board, trie, res);
    }
  }
  return res;
};

var search = function(x, y, board, p, res) {
  let m = board.length;
  let n = board[0].length;
  if (x < 0 || y < 0 || x >= m || y >= n) {
    return;
  }
  const char = board[x][y];
  if (char === "*" || !p.next[idx(char)]) {
    return;
  }

  p = p.next[idx(char)];
  if (p.word) {
    res.push(p.word);
    p.word = undefined;
  }
  board[x][y] = "*";
  search(x + 1, y, board, p, res);
  search(x - 1, y, board, p, res);
  search(x, y + 1, board, p, res);
  search(x, y - 1, board, p, res);
  board[x][y] = char;
};

var buildTrie = function(words) {
  const root = new TrieNode();
  for (let w of words) {
    p = root;
    for (let char of w) {
      if (!p.next[idx(char)]) {
        p.next[idx(char)] = new TrieNode();
      }
      p = p.next[idx(char)];
    }
    p.word = w;
  }
  return root;
};

var idx = function(char) {
  return char.charCodeAt(0) - 97;
};

class TrieNode {
  next = new Array(26).fill(undefined);
  word;
}
