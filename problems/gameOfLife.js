/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!board || !board[0]) {
    return;
  }
  // Binary for life
  /**
   * after before
   * 00 (0)
   * 01 (1)
   * 10 (2)
   * 11 (3)
   */
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = calculate(board, i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] >= 2) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
};

function aliveNeighbors(board, x, y) {
  let alive = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (!(i === 0 && j === 0)) {
        let xi = x + i;
        let yi = y + j;
        if (xi >= 0 && xi < board.length && yi >= 0 && yi < board[0].length) {
          if (board[xi][yi] === 1 || board[xi][yi] === 3) {
            alive += 1;
          }
        }
      }
    }
  }
  return alive;
}

function calculate(board, x, y) {
  let neightbors = aliveNeighbors(board, x, y);
  if (board[x][y] === 1) {
    if (neightbors === 2 || neightbors === 3) {
      return 3;
    }
    return 1;
  } else {
    if (neightbors === 3) {
      return 2;
    }
    return 0;
  }
}