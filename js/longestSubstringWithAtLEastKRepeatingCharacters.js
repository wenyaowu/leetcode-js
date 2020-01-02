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
  const count = {};
  let maxLength = 0;
  for (let char of s) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }


  // In this problem, we just need to split by the First character that has count less than k
  // Because if there's other character less than k, it will split again in the next recursion until hit the base case

  for (let char of Object.keys(count)) {
    if (count[char] < k) {
      let splittedWords = s.split(char); // split
      // Return the longest among all words
      for (let word of splittedWords) {
        let length = longestSubstring(word, k);
        maxLength = maxLength > length ? maxLength : length;
      }
      return maxLength;
    }
  }

  return s.length;
};
