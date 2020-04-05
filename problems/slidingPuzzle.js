/**
 * 
 On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
Note:

board will be a 2 x 3 array as described above.
board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].
 */
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const m = board.length;
  const n = board[0].length;
  let shortest = {};
  let { x, y } = searchZero(board);
  let queue = [{ b: board, l: 0, x, y }];

  while (queue.length) {
    let current = queue.shift();
    if (
      shortest[representation(current.b)] !== undefined &&
      shortest[representation(current.b)] <= current.l
    ) {
      continue;
    }
    shortest[representation(current.b)] = current.l;

    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    for (let i = 0; i < 4; i++) {
      let x = current.x;
      let y = current.y;
      // Four direction
      let xi = x + dx[i];
      let yi = y + dy[i];
      if (xi < 0 || yi < 0 || xi >= m || yi >= n) {
        continue;
      }
      let boardi = current.b.map(i => i.slice());
      swap(boardi, x, y, xi, yi); // swap board[x][y] and board[xi][yi]
      queue.push({ b: boardi, l: current.l + 1, x: xi, y: yi });
    }
  }

  return shortest[
    representation([
      [1, 2, 3],
      [4, 5, 0]
    ])
  ] === undefined
    ? -1
    : shortest[
        representation([
          [1, 2, 3],
          [4, 5, 0]
        ])
      ];
};

function swap(board, x, y, xi, yi) {
  let temp = board[x][y];
  board[x][y] = board[xi][yi];
  board[xi][yi] = temp;
}

function representation(board) {
  let res = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      res += board[i][j];
    }
  }
  return res;
}

function searchZero(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        return { x: i, y: j };
      }
    }
  }
}
