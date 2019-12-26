/**
 * Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . 
The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) {
      return 0;
    }
    s.replace(" ", "");
    lastOperator = "+";
    currentNumberString = "";
    stack = [];
    for (let i = 0; i < s.length; i++) {
      // accumulate digits
      
      if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
        currentNumber = +currentNumberString;
        operate(lastOperator, currentNumber, stack);
        lastOperator = s[i];
        currentNumberString = ""; // Reset
      } else {
          currentNumberString += s[i];
      }
    }
    operate(lastOperator, +currentNumberString, stack);
    return stack.reduce((accum, curr)=>{
        return accum + curr
    }, 0)
  };
  
  var operate = function(operator, number, stack) {
    if (operator === "+") {
      stack.push(number);
    }
    if (operator === "-") {
      stack.push(-number);
    }
    if (operator === "*") {
      lastNumber = stack.pop();
      stack.push(lastNumber * number);
    }
    if (operator === "/") {
      lastNumber = stack.pop();
      stack.push(Math.trunc(lastNumber / number));
    }
  };
  