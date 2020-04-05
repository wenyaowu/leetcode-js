/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500]. */
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const freq = new Array(26).fill(0);
  const charArray = new Array(S.length).fill("");
  let maxOccurance = 0;
  let maxChar = "";
  for (let char of S) {
    let idx = charToNum(char);
    freq[idx] += 1;
    if (freq[idx] > maxOccurance) {
      maxOccurance = freq[idx];
      maxChar = char;
    }
  }
  if (maxOccurance > Math.ceil(S.length / 2)) {
    return "";
  }

  // Put max char in even position first
  let idx = 0;
  while (freq[charToNum(maxChar)] > 0) {
    charArray[idx] = maxChar;
    freq[charToNum(maxChar)] -= 1;
    idx += 2;
  }

  for (let i = 0; i < freq.length; i++) {
    while (freq[i] > 0) {
      if (idx > S.length - 1) {
        idx = 1;
      }
      charArray[idx] = String.fromCharCode(i + 97);
      idx += 2;
      freq[i] -= 1;
    }
  }
  return charArray.join("");
};

function charToNum(char) {
  return char.charCodeAt(0) - 97;
}
