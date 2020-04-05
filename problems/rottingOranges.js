/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  if (!grid || !grid[0]) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  // Use bfs
  const queue = [];
  let fresh = 0;
  let minute = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push({ x: i, y: j });
      }
      if (grid[i][j] === 1) {
        fresh += 1;
      }
    }
  }
  if (fresh === 0) {
    return 0;
  }

  if (queue.length === 0) {
    return -1;
  }

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let { x, y } = queue.shift();
      for (let d = 0; d < 4; d++) {
        let xi = x + dx[d];
        let yi = y + dy[d];
        if (xi < 0 || yi < 0 || xi >= m || yi >= n || grid[xi][yi] !== 1) {
          continue;
        }
        fresh -= 1;
        grid[xi][yi] = 2;
        queue.push({ x: xi, y: yi });
      }
    }
    minute += 1;
    // If this round make fresh ===
    if (fresh === 0) {
      return minute;
    }
  }

  return fresh === 0 ? minute : -1;
};
