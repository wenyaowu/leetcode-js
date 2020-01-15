/*
In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.



Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

 

Example 1:

Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]
Example 2:

Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 

Constraints:

|x| + |y| <= 300 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const lookup = {};
    lookup["0#0"] = 0;
    lookup["1#0"] = 3;
    lookup["0#1"] = 3;
    return dp(Math.abs(x), Math.abs(y));
  
    function dp(x, y) {
      const key = `${x}#${y}`;
      if (lookup[key] !== undefined) {
          console.log(key, lookup[key])
        return lookup[key];
      }
      let moves = Math.min(dp(Math.abs(x - 1), Math.abs(y - 2)), dp(Math.abs(x - 2), Math.abs(y - 1))) + 1;
      lookup[key] = moves;
      return moves;
    }
  };
  
