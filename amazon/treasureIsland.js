/*
You have a map that marks the location of a treasure island. 
Some of the map area has jagged rocks and dangerous reefs. 
Other areas are safe to sail in. 
There are other explorers trying to find the treasure. 
So you must figure out a shortest route to the treasure island.

Assume the map area is a two dimensional grid, 
represented by a matrix of characters. 
You must start from the top-left corner of the map and can move one block up, down, left or right 
at a time. The treasure island is marked as X in a block of the matrix. 
X will not be at the top-left corner. 
Any block with dangerous rocks or reefs will be marked as D. 
You must not enter dangerous blocks. 
You cannot leave the map area. 
Other areas O are safe to sail in. 
The top-left corner is always safe. Output the minimum number of steps to get to the treasure.

Example:

Input:
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

Output: 5
Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps. */

function treasureIsland(grid) {
  let steps = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const queue = [{ x: 0, y: 0 }];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let { x, y } = queue.shift();
      if (grid[x][y] === "X") {
        return steps;
      }
    //   if (visited[x][y]) { -------------> We don't need to do this here as we don't push it to queue if it's viisted
    //     continue;
    //   }
      visited[x][y] = true;
      for (let d = 0; d < 4; d++) {
        let xi = x + dx[d];
        let yi = y + dy[d];
        if (xi < 0 || yi < 0 || xi >= m || yi >= n || grid[xi][yi] === "D" || visited[xi][yi]) {
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
    ["O", "O", "O", "O"],
    ["D", "O", "D", "O"],
    ["O", "O", "O", "O"],
    ["X", "D", "D", "O"]
  ])
);
