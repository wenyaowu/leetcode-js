/*
Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 

Example 1:

Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]


[["B",1,"E",1,"B"],
 ["B",1,"M",1,"B"],
 ["B",1,1,1,"B"],
 ["B","B","B","B","B"]]
Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:

Input: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

 

Note:

The range of the input matrix's height and width is [1,50].
The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
The input board won't be a stage when game is over (some mines have been revealed).
For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares. */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  if (!board || !board[0] || !click) {
    return;
  }
  const m = board.length;
  const n = board[0].length;
  const mineCount = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const d = [0, 1, -1];
  // Step on mine
  if (board[click[0]][click[1]] === "M") {
    board[click[0]][click[1]] = "X";
    return board;
  }
  // Precalculate how many mines are around for each cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "M") {
        for (let d1 = 0; d1 < 3; d1++) {
          for (let d2 = 0; d2 < 3; d2++) {
            if (d[d1] === 0 && d[d2] === 0) {
              // ignore(0,0)
              continue;
            }
            x = i + d[d1];
            y = j + d[d2];
            if (x >= 0 && y >= 0 && x < m && y < n) {
              mineCount[x][y] += 1;
            }
          }
        }
      }
    }
  }

  const queue = [{ x: click[0], y: click[1] }];
  while (queue.length) {
    let { x, y } = queue.shift();
    if (board[x][y] !== "E") {
      // Already processed
      continue;
    }
    if (mineCount[x][y]) {
      // Process non-blank
      board[x][y] = mineCount[x][y].toString();
    } else {
      board[x][y] = "B";
      // Push Neighbors
      for (let d1 = 0; d1 < 3; d1++) {
        for (let d2 = 0; d2 < 3; d2++) {
          if (d[d1] === 0 && d[d2] === 0) {
            // ignore(0,0)
            continue;
          }
          xn = x + d[d1];
          yn = y + d[d2];
          if (xn >= 0 && yn >= 0 && xn < m && yn < n && board[xn][yn] === "E") {
            queue.push({ x: xn, y: yn });
          }
        }
      }
    }
  }
  return board;
};

updateBoard([
  ["E", "E", "E", "E", "E"],
  ["E", "E", "M", "E", "E"],
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"]
]);
