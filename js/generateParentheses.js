/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] 
*/

/**
 * Classic DFS, two possible NEXT MOVES are (1) Add left and (2) Add right base on different conditions 
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
  const res = [];
  dfs(0, 0, "");
  
  return res;
  
  function dfs(right, left, current) {
      if(left === right && right === n) {
          res.push(current);
          return;
      }
      if(left < n) {
          dfs(right, left+1, current+"(");
      }
      if(right < left) {
          dfs(right+1, left, current+")");
      }
  }
};