/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
// 0 1 2 3
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    
  const visited = {};
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  backtracking(0, 0, 0);
  
  function backtracking(x, y, direction) {
      
      // Base case to return 
      if(visited[`${x}-${y}`]) {
          return;
      }
      // Set visited for node
      visited[`${x}-${y}`] = true;
      robot.clean();
      
      
      for(let i = 0; i < 4; i++) {
          let d = (i+direction) % 4;
          // for some condition, do no process this direction
          // out of bound, already visited
          if(!robot.move()) {
              robot.turnRight();
              continue;
          }
          // backtracking
          backtracking(x+dx[d], y+dy[d], d);
          
          // reset
          robot.turnRight();
          robot.turnRight();
          robot.move();
          robot.turnLeft();
      } 
  }
};