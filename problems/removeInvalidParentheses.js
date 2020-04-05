 /*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""] */
/**
 * @param {string} s
 * @return {string[]}
 */

// bfs solution
var removeInvalidParentheses = function(s) {
    const res = [];
    const queue = [s];
    const visited = {s:true};
    let found = false;
    while (queue.length) {
      let current = queue.shift();
      if (isValid(current)) {
        res.push(current);
        found = true;
      }
      if(found) continue;
      for (let i = 0; i < current.length; i++) {
        if(current[i]!=="(" && current[i]!==")") continue;
        let sub = current.substring(0, i) + current.substring(i + 1);
        if (!visited[sub]) {
          visited[sub] = true;
          queue.push(sub);
        }
      }
    }
    return res;
  };
  
  function isValid(s) {
    let count = 0;
    // "(" +1
    // ")" -1
    for (let char of s) {
      if (char === ")") {
        if (count <= 0) {
          return false;
        } else {
          count -= 1;
        }
      } else if (char === "(") {
        count += 1;
      } else {
        continue;
      }
    }
    return count === 0;
  }

  // dfs solution
  var removeInvalidParentheses = function(s) {}
