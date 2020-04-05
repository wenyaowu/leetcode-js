/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()" */

/**
 * @param {string} s
 * @return {number}
 */

 /**
  *  Key is that the substring between two invalid parentheses are valid ) ( ) ( ) )  -> String between 0,5 is valid, length = 5-0-1 
  *                                                                      0 1 2 3 4 5
  */
var longestValidParentheses = function(s) {
    const stack = [];
    let longest = 0;
    for(let i = 0; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else {

            if(s[stack[stack.length-1]] === '(') {
                stack.pop();
            } else {
                stack.push(i)
            }
        }
    }
    if(stack.length === 0) {
        return s.length;
    }
    let a = s.length;
    let b = 0;
    while(stack.length > 0) {
        b = stack.pop();
        longest = Math.max(longest, a-b-1);
        a = b;
    }
    longest = Math.max(longest, a);
    return longest;
};