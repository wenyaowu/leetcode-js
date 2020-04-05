/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    /**
     * Stack is used to save the previous state before []
     * For example: 3[a2[c]]
     * for [c], we save a, 2 into string and number stack 
     * when we encounter [, we start collecting char until we
     * encounter ], we calculate the result with a+2*current where current is c
     * 
     * The key is the fomula: PREV + NUM * CURRENT, calculate from inside to outside, stack save from outside to inside
     */
  const numStack = [];
  const stringStack = [];
  let currentString = "";
  let currentNum = 0;
  for (let char of s) {
    if (char === "[") {
      stringStack.push(currentString);
      numStack.push(currentNum);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      let prevString = stringStack.pop();
      let num = numStack.pop();
      let str = "";
      for (let i = 0; i < num; i++) {
        str += currentString;
      }
      currentString = prevString + str;
    } else if (isDigit(char)) {
      currentNum = currentNum * 10 + +char;
    } else {
      currentString += char;
    }
  }
  return currentString;
};

function isDigit(char) {
  return char <= "9" && char >= "0";
}
