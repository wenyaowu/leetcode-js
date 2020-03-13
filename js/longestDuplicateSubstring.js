/*
Given a string S, consider all duplicated substrings: (contiguous) substrings of S 
that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  
(If S does not have a duplicated substring, the answer is "".)

 

Example 1:

Input: "banana"
Output: "ana"
Example 2:

Input: "abcd"
Output: ""
 

Note:

2 <= S.length <= 10^5
S consists of lowercase English letters. */
/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function(S) {
  let lo = 0;
  let hi = S.length - 1;

  let res = "";
  while (lo < hi) {
    let mid = Math.floor((lo + hi + 1) / 2); // low is included, we need to do lo+hi+1
    let dup = test(S, mid);
    if (dup) {
      // Exists, try bigger but include current
      lo = mid;
      res = dup;
    } else {
      hi = mid - 1;
    }
  }
  return res;
};

function test(S, size) {
  const mod = Math.pow(2, 63) - 1;
  // Rolling hash
  let current = 0;
  let p = 1
  for(let i = 0; i<size; i++) {
      p = (p*26) % mod;
  }
  for (let i = 0; i < size; i++) {
    current = (current * 26 + charToNum(S[i])) % mod;
  }
  
  const hash = { current: true };
  for (let i = size; i < S.length; i++) {
    current =
      (current * 26 - charToNum(S[i - size]) * p + charToNum(S[i])) % mod;
    if (hash[current]) {
      return S.substring(i - size + 1, i + 1);
    }
    hash[current] = true;
  }
  return false;
}

function charToNum(char) {
  return char.charCodeAt(0) - "a".charCodeAt(0);
}