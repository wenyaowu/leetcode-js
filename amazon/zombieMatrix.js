/**
 * Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

Example:

Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
 */
function minHours(grid) {
  if (!grid || !grid[0]) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  let human = 0;
  let hours = 0;
  const queue = [];

  dx = [0, 0, -1, 1];
  dy = [1, -1, 0, 0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push({ x: i, y: j }); // use this for BFS
      }
      if (grid[i][j] === 0) {
        human += 1;
      }
    }
  }
  if (queue.length === 0) {
    return -1; // Impossible to infect any human
  }
  if (human === 0) {
    return 0;
  }

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let { x, y } = queue.shift();
      for (let d = 0; d < 4; d++) {
        let xi = x + dx[d]; // next x
        let yi = y + dy[d]; // next y
        if (xi < 0 || yi < 0 || xi >= m || yi >= n || grid[xi][yi] === 1) {
          continue;
        }
        // infect
        grid[xi][yi] = 1;
        human -= 1;
        queue.push({ x: xi, y: yi });
      }
    }
    hours += 1;
    if (human === 0) {
      return hours;
    }
  }
  return hours;
}

console.log(
  minHours([
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
  ])
);
