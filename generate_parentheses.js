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
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // The base case is to reach open & close # of parentheses === n

  // While open !== n || close !== n:
  // if open > close: we can either add open or close
  // When close == open (close should never be bigger than open): we can add open
  const results = [];

  function helper(open, close, current) {
    if (open === n && close === n) {
      results.push(current);
      return;
    }
    if (open < n) { // <------ !!Important condition
      helper(open + 1, close, `${current}(`); // open + 1
    }
    if (open > close) {
      helper(open, close + 1, `${current})`); // close +1
    }
  }

  helper(0, 0, "");
  return results;
};
