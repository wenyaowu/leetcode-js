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
  // Move right until we find all the characters needed
  // Find all the characters needed
  // calculate the length
  // move left one at the time
  // move until the condition does not fit
  // Move right again until right reach the end
  let minLength = Number.MAX_VALUE;
  let res = "";
  let r = 0,
    l = 0;
  const need = createNeededLookedup(t);
  let currentSubstringChars = {};
  let missing = t.length;

  while (r < s.length) {
    let currentChar = s[r];
    currentSubstringChars = setChar(currentSubstringChars, currentChar);
    if (
      need[currentChar] &&
      need[currentChar] >= currentSubstringChars[currentChar]
    ) {
      missing -= 1;
    }
    while (missing === 0 && l <= r) {  
      // note l <= r condition, eg: 'a', 'a'. Equal needs to be included
      // claculate
      if ((r - l + 1) < minLength) {
        minLength = r - l + 1;
        res = s.substring(l, r + 1);
      }
      currentLeftChar = s[l];
      currentSubstringChars[currentLeftChar] -= 1;
      if (
        need[currentLeftChar] &&
        need[currentLeftChar] > currentSubstringChars[currentLeftChar]
      ) {
        missing += 1;
      }
      //move left
      l += 1;
    }

    r += 1;
  }
  return res;
};

function setChar(lookup, char) {
  if (lookup[char]) {
    lookup[char] += 1;
  } else {
    lookup[char] = 1;
  }
  return lookup;
}

function createNeededLookedup(s) {
  let res = {};
  for (let char of [...s]) {
    res = setChar(res, char);
  }
  return res;
}