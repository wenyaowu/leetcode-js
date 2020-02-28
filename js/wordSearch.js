/**
 * Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

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
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length, // 3
    n = board[0].length; // 4

  // use 0 to mark visited node
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (helper([i, j], 0, board, word)) {
        return true;
      }
    }
  }
  return false;
};

function helper(pos, at, board, word) {
  const x = pos[0],
    y = pos[1];
  // out of bound

  if (
    x < 0 ||
    y < 0 ||
    x >= board.length ||
    y >= board[0].length ||
    board[x][y] === 0 // Checked
  ) {
    return false;
  }
  // match char
  if (board[x][y] === word[at]) {
    // match last word
    if (at === word.length - 1) {
      return true;
    }
    const temp = board[x][y];
    board[x][y] = 0;
    const res =
      helper([x + 1, y], at + 1, board, word) ||
      helper([x - 1, y], at + 1, board, word) ||
      helper([x, y + 1], at + 1, board, word) ||
      helper([x, y - 1], at + 1, board, word);
    board[x][y] = temp;
    return res;
  }
}

console.log(
  exist(
    [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    "ABCCED"
  )
);
