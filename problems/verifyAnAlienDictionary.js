/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. 
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, 
return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to 
lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters. */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (!isSmaller(words[i], words[i + 1])) {
      return false;
    }
  }
  return true;

  function isSmaller(w1, w2) {
    let i = 0;
    while (i < w1.length && i < w2.length) {
      if (dict[w1[i]] < dict[w2[i]]) {
        return true;
      }
      if (dict[w1[i]] > dict[w2[i]]) {
        return false;
      }
      i+=1;
    }
    if (i === w1.length) {
      return true;
    }
    if (i === w2.length) {
      return false;
    }
    return true;
  }
};
