/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S. */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = "";
    let minLength = Number.MAX_VALUE;
    let required = t.length;
    if (!s || !t) {
      return res;
    }
    const lookup = {};
    for (let char of t) {
      if (!lookup[char]) {
        lookup[char] = 1;
      } else {
        lookup[char] += 1;
      }
    }
    let head = 0;
    let tail = 0;
    
    while (head < s.length) {
      if (lookup[s[head]] !== undefined) {
        if (lookup[s[head]] > 0) {
          required -= 1;
        }
        //It's in the list of needed character
        lookup[s[head]] -= 1;
        
        while (required === 0) {
          if (lookup[s[tail]] !== undefined) {
            if (lookup[s[tail]] === 0) {
              let length = head - tail + 1;
              if (length < minLength) {
                minLength = length;
                res = s.substring(tail, head + 1);
              }
              required += 1;
            }
            lookup[s[tail]] += 1;
          }
          
          tail += 1;
        }
      }
      head += 1;
    }
    return res;
  };
  