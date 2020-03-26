/*
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
 

Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix). */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (!matrix || !matrix[0]) {
    return [];
  }
  // First Process Pacific, save all the nodes that can reach pacific
  // Needs to be equal increase
  const m = matrix.length;
  const n = matrix[0].length;
  const res = [];
  const queue = [];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  for (let i = 0; i < m; i++) {
    queue.push({ x: i, y: 0 });
  }
  for (let j = 0; j < n; j++) {
    queue.push({ x: 0, y: j });
  }

  const lookup = {}; // Record ones that can be reached from pacific
  while (queue.length) {
    let { x, y } = queue.shift();
    if (lookup[`${x}-${y}`]) {
      continue; // Already reachable, dont need to check
    }
    lookup[`${x}-${y}`] = [x, y];

    for (let d = 0; d < 4; d++) {
      let xn = x + dx[d];
      let yn = y + dy[d];
      if (
        xn < 0 ||
        yn < 0 ||
        xn >= m ||
        yn >= n ||
        matrix[x][y] > matrix[xn][yn] ||
        lookup[`${xn}-${yn}`]
      ) {
        continue;
      }
      queue.push({ x: xn, y: yn });
    }
  }

  // Check Atlanta
  for (let i = 0; i < m; i++) {
    queue.push({ x: i, y: n - 1 });
  }
  for (let j = 0; j < n; j++) {
    queue.push({ x: m - 1, y: j });
  }

  const visited = {};
  while (queue.length) {
    let { x, y } = queue.shift();
    if (lookup[`${x}-${y}`]) {
      res.push(lookup[`${x}-${y}`]);
      delete lookup[`${x}-${y}`];
    }
    visited[`${x}-${y}`] = true;

    for (let d = 0; d < 4; d++) {
      let xn = x + dx[d];
      let yn = y + dy[d];
      if (
        xn < 0 ||
        yn < 0 ||
        xn >= m ||
        yn >= n ||
        matrix[x][y] > matrix[xn][yn] ||
        visited[`${xn}-${yn}`]
      ) {
        continue;
      }
      queue.push({ x: xn, y: yn });
    }
  }
  return res;
};
