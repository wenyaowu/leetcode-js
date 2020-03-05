/*
A string S of lowercase letters is given. We want to partition this string into as many parts 
as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only. */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  // This records the last index of each character,
  // this will help us track the minimum length that we need to extend for current substring
  const lastIndex = {};
  const res = [];
  for (let i = 0; i < S.length; i++) {
    lastIndex[S[i]] = i;
  }

  let start = 0;
  let last = 0;
  for (let i = 0; i < S.length; i++) {
    if (lastIndex[S[i]] > last) {
      last = lastIndex[S[i]];
    } // How far we need to extend this substring
    if (last === i) {
      // if the last index of current substring === current index, means we find a valid substring
      res.push(last - start + 1);
      start = last + 1;
    }
  }

  return res;
};
