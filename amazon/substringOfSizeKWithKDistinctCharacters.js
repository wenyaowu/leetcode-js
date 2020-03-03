/**
 * Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.

Example 1:

Input: s = "abcabc", k = 3
Output: ["abc", "bca", "cab"]
Example 2:

Input: s = "abacab", k = 3
Output: ["bac", "cab"]
Example 3:

Input: s = "awaglknagawunagwkwagl", k = 4
Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
Explanation: 
Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl" 
"wagl" is repeated twice, but is included in the output once.
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
 */

function sizeKWithKDistinct(s, k) {
  const lookup = new Array(26).fill(0);
  const res = new Set();
  let distinct = 0;
  let head = 0;
  while (head < k) {
    if (lookup[charToNum(s[head])] === 0) {
      distinct += 1;
    }
    lookup[charToNum(s[head])] += 1;
    head += 1;
  }
  if (distinct === k) {
    res.add(s.substring(head - k, head));
  }

  while (head < s.length) {
    if (lookup[charToNum(s[head])] === 0) {
      distinct += 1;
    }
    lookup[charToNum(s[head])] += 1;
    lookup[charToNum(s[head - k])] -= 1;
    if (lookup[charToNum(s[head - k])] === 0) {
      distinct -= 1;
    }

    if (distinct === k) {
      res.add(s.substring(head - k + 1, head + 1));
    }
    head += 1;
  }
  return [...res];
}

function charToNum(char) {
  return char.charCodeAt(0) - 97;
}

console.log(sizeKWithKDistinct("abcabc", 3));
console.log(sizeKWithKDistinct("awaglknagawunagwkwagl", 4));
