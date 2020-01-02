/**
 * 
Find the length of the longest substring T of a given string (consists of lowercase letters only) 
such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k) {
    return 0;
  }
  const counts = {};
  for (let char of s) {
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char] += 1;
    }
  }

  for (let key of Object.keys(counts)) {
    if (counts[key] < k) {
      let maxLength = 0;
      for (let sub of s.split(key)) {
        let length = longestSubstring(sub, k);
        maxLength = length > maxLength ? length : maxLength;
      }
      return maxLength;
    }
  }

  return s.length;
};
