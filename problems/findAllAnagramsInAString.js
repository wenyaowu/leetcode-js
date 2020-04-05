/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab". */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // Find string that contains all characters in p
  const m = p.length;
  const res = [];
  let dict = {};
  for (let c of p) {
    if (!dict[c]) {
      dict[c] = 1;
    } else {
      dict[c] += 1;
    }
  }

  let count = Object.keys(dict).length;
  let r = 0;
  let l = 0;

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
          if (r - l + 1 === m) {
            res.push(l);
          }
        }
      }

      l += 1;
    }
    r += 1;
  }
  return res;
};

var findAnagrams = function(s, p) {
  // Find string that contains all characters in p
  const m = p.length;
  const res = [];
  let dict = {};
  for (let c of p) {
    if (!dict[c]) {
      dict[c] = 1;
    } else {
      dict[c] += 1;
    }
  }

  let count = Object.keys(dict).length;
  let r = 0;

  while (r < m) {
    let char = s[r];
    if (dict[char] !== undefined) {
      dict[char] -= 1;
      if (dict[char] === 0) {
        count -= 1;
      }
    }
    r += 1;
  }
  if (count === 0) {
    res.push(0);
  }
  while (r < s.length) {
    let curr = s[r];
    let remove = s[r - m];
    if (dict[curr] !== undefined) {
      dict[curr] -= 1;
      if (dict[curr] === 0) {
        count -= 1;
      }
    }
    if (dict[remove] !== undefined) {
      dict[remove] += 1;
      if (dict[remove] > 0) {
        count += 1;
      }
    }
    if (count === 0) {
      res.push(r - m + 1);
    }

    r += 1;
  }
  return res;
};
