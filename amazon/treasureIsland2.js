/**
 You have a map that marks the locations of treasure islands. 
 Some of the map area has jagged rocks and dangerous reefs. 
 Other areas are safe to sail in. There are other explorers trying to find the treasure. 
 So you must figure out a shortest route to one of the treasure islands.

Assume the map area is a two dimensional grid, represented by a matrix of characters. 
You must start from one of the starting point (marked as S) of the map and can move one block up, down, left or right at a time. 
The treasure island is marked as X. Any block with dangerous rocks or reefs will be marked as D. 
You must not enter dangerous blocks. You cannot leave the map area. 
Other areas O are safe to sail in. 
Output the minimum number of steps to get to any of the treasure islands.

Example:

Input:
[['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]

Output: 3
Explanation:
You can start from (0,0), (0, 3) or (0, 4). The treasure locations are (2, 4) (3, 0) and (4, 0). Here the shortest route is (0, 3), (1, 3), (2, 3),
 */

function treasureIsland(grid) {
  let steps = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "S") {
        queue.push({ x: i, y: j });
        visited[i][j] = true;
      }
    }
  }

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let { x, y } = queue.shift();
      if (grid[x][y] === "X") {
        return steps;
      }
      for (let d = 0; d < 4; d++) {
        let xi = x + dx[d];
        let yi = y + dy[d];
        if (
          xi < 0 ||
          yi < 0 ||
          xi >= m ||
          yi >= n ||
          grid[xi][yi] === "D" ||
          visited[xi][yi]
        ) {
          continue;
        }
        queue.push({ x: xi, y: yi });
      }
    }
    steps += 1;
  }
  return -1;
}

console.log(
  treasureIsland([
    ["S", "O", "O", "S", "S"],
    ["D", "O", "D", "O", "D"],
    ["O", "O", "O", "O", "X"],
    ["X", "D", "D", "O", "O"],
    ["X", "D", "D", "D", "O"]
  ])
);
