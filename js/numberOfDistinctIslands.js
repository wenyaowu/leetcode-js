/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to be the same as
 another if and only if one island can be translated (and not rotated or reflected) 
 to equal the other.

Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.
Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.

Notice that:
11
1
and
 1
11
are considered different island shapes, because we do not consider reflection / rotation.
Note: The length of each dimension in the given grid does not exceed 50. */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    if(!grid || !grid[0]) {
        return 0;
    }
    let uniqueIslands = new Set();
    const m = grid.length;
    const n = grid[0].length;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    for(let i = 0; i<m; i++) {
        for (let j = 0; j<n; j++) {
            if(grid[i][j] === 1) {
                let encode = [];
                dfs(i, j, 'o', encode);
                uniqueIslands.add(encode.join(''));
            }
        }
    }
    return uniqueIslands.size;


    function dfs(x, y, direction, res) {
        if(x < 0 || y<0 || x>=m || y>=n || grid[x][y] !== 1) {
            return;
        }
        res.push(direction);
        grid[x][y] = 0;
        dfs(x+dx[0], y+dy[0], 'u', res);
        dfs(x+dx[1], y+dy[1], 'd', res);
        dfs(x+dx[2], y+dy[2], 'r', res);
        dfs(x+dx[3], y+dy[3], 'l', res);
        res.push('b'); //-------->Why
    } 
};