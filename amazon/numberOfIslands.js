/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  if (!grid || !grid[0]) {
    return count;
  }
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        dfsFlood(i, j);
      }
    }
  }
  return count;

  function dfsFlood(x, y) {
    grid[x][y] = "0";
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
      let xi = x + dx[i];
      let yi = y + dy[i];
      if (xi < 0 || yi < 0 || xi >= m || yi >= n || grid[xi][yi] === "0") {
        continue;
      }
      dfsFlood(xi, yi);
    }
  }
};
