/**
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". 
If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

Input: 
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
 

Note:

All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100].
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let minSubstringLen = S.length;
  let minSubstringStart = -1;
  let ps = 0;
  let pt = 0;

  while (ps < S.length) {
    if (S[ps] === T[pt]) {
      ps += 1;
      pt += 1;
    } else {
      ps += 1;
    }

    if (pt === T.length) {
      ps -= 1;
      pt -= 1;
      let substringEnd = ps;
      while (pt >= 0) {
        if (S[ps] == T[pt]) {
          ps -= 1;
          pt -= 1;
        } else {
          ps -= 1;
        }
      }
      ps += 1;
      pt += 1;
      if (substringEnd - ps + 1 < minSubstringLen) {
        minSubstringStart = ps;
        minSubstringLen = substringEnd - ps + 1;
      }
      ps += 1;
    }
  }
  return minSubstringStart === -1
    ? ""
    : S.substring(minSubstringStart, minSubstringStart + minSubstringLen);
};
