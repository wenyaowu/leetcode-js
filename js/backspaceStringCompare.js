/*
Given two strings S and T, return if they are equal when both are 
typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space? */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  // Solution (1): use stack, requires O(N+M) space

  // Solution (2): Scan from the back
  let s = S.length - 1;
  let t = S.length - 1;
  let sBack = 0;
  let tBack = 0;
  while (true) {
    while (s >= 0 && (sBack || S[s] === "#")) {
      if (S[s] === "#") {
        sBack += 1; // add another back
      } else {
        sBack -= 1; // use back and skip current char
      }
      s -= 1;
    }
    while (t >= 0 && (tBack || T[t] === "#")) {
      if (T[t] === "#") {
        tBack += 1; // add another back
      } else {
        tBack -= 1; // use back and skip current char
      }
      t -= 1;
    }
    if (t >= 0 && s >= 0 && S[s] === T[t]) {
      s -= 1;
      t -= 1;
    } else {
      return t === -1 && s === -1;
    }
  }
};
