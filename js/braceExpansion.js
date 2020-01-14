/*
A string S represents a list of words.

Each letter in the word has 1 or more options.  
If there is one option, the letter is represented as is.  
If there is more than one option, then curly braces delimit the options.  
For example, "{a,b,c}" represents options ["a", "b", "c"].

For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

Return all words that can be formed in this manner, in lexicographical order.

 

Example 1:

Input: "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]
Example 2:

Input: "abcd"
Output: ["abcd"]
 

Note:

1 <= S.length <= 50
There are no nested curly brackets.
All characters inside a pair of consecutive opening and ending curly brackets are different. */

/**
 * @param {string} S
 * @return {string[]}
 */
var expand = function(S) {
  const res = [];
  backtracking(0, "");
  return res;

  function backtracking(index, currentString) {
    if (index >= S.length) {
      res.push(currentString);
      return;
    }

    if (S[index] === "{") {
      let pointer = index + 1;
      while (S[pointer] !== "}") {
        pointer += 1;
      }
      let chars = S.substring(index + 1, pointer).split(",");
      for (let c of chars) {
        backtracking(pointer + 1, currentString + c);
      }
    } else {
      backtracking(index + 1, currentString + S[index]);
    }
  }
};