/**
 * 
Given a string S and a string T, 
find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const dict = {};
  for (let c of t) {
    if (!dict[c]) {
      dict[c] = 1;
    } else {
      dict[c] += 1;
    }
  }
  let count = Object.keys(dict).length;

  let r = 0; // pointer
  let l = 0;
  let start = -1;
  let minLength = Number.MAX_VALUE;

  while (r < s.length) {
    let char = s[r];
    if (dict[char] !== undefined) {
      dict[char] -= 1;
      if (dict[char] === 0) {
        count -= 1;
      }
    }
    while (count === 0) {
      let temp = s[l];
      if (dict[temp] !== undefined) {
        dict[temp] += 1;
        if (dict[temp] > 0) {
          count += 1;
          if (r - l + 1 < minLength) {
            start = l;
            minLength = r - l + 1;
          }
        }
      }
      l += 1;
    }
    r += 1;
  }
  return start === -1 ? "" : s.substring(start, start + minLength);
};
