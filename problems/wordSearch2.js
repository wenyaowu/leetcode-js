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

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.word = undefined;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (!board || !board[0]) {
    return [];
  }
  const root = buildTrie(words);
  const res = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      helper(i, j, board, root, res);
    }
  }
  return res;
};

var helper = function(x, y, board, node, res) {
  
  if (x >= board.length || y >= board[0].length || x < 0 || y < 0 || board[x][y]==="*") {
    return;
  }
  const char = board[x][y];
  if (!node.children[charToNum(char)]) {
    return;
  }

  node = node.children[charToNum(char)];
  // base case
  if (node.word) {
    res.push(node.word);
    node.word = undefined;
  }
  board[x][y] = "*";
  helper(x + 1, y, board, node, res);
  helper(x - 1, y, board, node, res);
  helper(x, y + 1, board, node, res);
  helper(x, y - 1, board, node, res);
  board[x][y] = char;
};

var buildTrie = function(words) {
  const root = new TrieNode();
  for (let w of words) {
    let current = root;
    for (let char of w) {
      if (!current.children[charToNum(char)]) {
        current.children[charToNum(char)] = new TrieNode();
      }
      current = current.children[charToNum(char)];
    }
    current.word = w;
  }
  return root;
};

var charToNum = function(char) {
  return char.charCodeAt(0) - 97;
};
