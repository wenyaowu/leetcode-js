/*
Given a string containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;

  const stack = [];

  const open = "({[";

  for (let char of s) {
    if (open.indexOf(char) > -1) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (
        !last || // <----- !!Important condition if there's closing character but no opening
        (last === "[" && char !== "]") ||
        (last === "{" && char !== "}") ||
        (last === "(" && char !== ")")
      )
        return false;
    }
  }

  return stack.length === 0;
};
