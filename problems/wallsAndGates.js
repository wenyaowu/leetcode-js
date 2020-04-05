/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4 */
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  if (!rooms || !rooms.length) {
    return;
  }
  const m = rooms.length;
  const n = rooms[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const INF = 2147483647;
  const queue = [];
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (rooms[x][y] === 0) {
        queue.push({ x, y });
      }
    }
  }
  let level = 0;
  while (queue.length) {
    let size = queue.length;
    for (let k = 0; k < size; k++) {
      let { x, y } = queue.shift();
      
      if(rooms[x][y] === INF) { // Not INF means its not visited yet, we only update the ones that are not visited. 
        rooms[x][y] = level;
      }
      
      for (let d = 0; d < 4; d++) {
        let xn = x + dx[d];
        let yn = y + dy[d];
        if (xn < 0 || yn < 0 || xn >= m || yn >= n || rooms[xn][yn] !== INF) {
          continue;
        }
        queue.push({ x: xn, y: yn });
      }
    }
    level += 1;
  }
};
