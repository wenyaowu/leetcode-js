/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let maxArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;

  function dfs(x, y) {
    let area = 1;
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let xi = x + dx[i];
      let yi = y + dy[i];
      if (
        xi >= 0 &&
        yi >= 0 &&
        xi < m &&
        yi < n &&
        !visited[xi][yi] &&
        grid[xi][yi] === 1
      ) {
        area += dfs(xi, yi);
      }
    }
    return area;
  }
};
