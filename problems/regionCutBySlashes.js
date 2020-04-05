/*
In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, 
or blank space.  These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a \ is represented as "\\".)

Return the number of regions.

 

Example 1:

Input:
[
  " /",
  "/ "
]
Output: 2
Explanation: The 2x2 grid is as follows:

Example 2:

Input:
[
  " /",
  "  "
]
Output: 1
Explanation: The 2x2 grid is as follows:

Example 3:

Input:
[
  "\\/",
  "/\\"
]
Output: 4
Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:

Example 4:

Input:
[
  "/\\",
  "\\/"
]
Output: 5
Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:

Example 5:

Input:
[
  "//",
  "/ "
]
Output: 3
Explanation: The 2x2 grid is as follows:

 

Note:

1 <= grid.length == grid[0].length <= 30
grid[i][j] is either '/', '\', or ' '. */
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const g = new Array(m * 3).fill(0).map(() => new Array(n * 3).fill(0));
  let count = 0;
  // populate grids
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "\\") {
        g[3 * i][3 * j] = 1;
        g[3 * i + 1][3 * j + 1] = 1;
        g[3 * i + 2][3 * j + 2] = 1;
      }
      if (grid[i][j] === "/") {
        g[i * 3][j * 3 + 2] = 1;
        g[3 * i + 1][3 * j + 1] = 1;
        g[i * 3 + 2][j * 3] = 1;
      }
    }
  }

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      if (g[i][j] === 0) {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= g.length || y >= g[0].length || g[x][y] === 1) {
      return;
    }
    g[x][y] = 1;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }
};
