/**
 * Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let level = 1;
  if (wordList.indexOf(endWord) < -1) {
    return 0;
  }
  let queue = [beginWord];
  let nextQueue = [];
  let nextWordList = [];

  while (queue.length > 0) {
    level += 1;
    for (let currentWord of queue) {
      for (let word of wordList) {
        if (transformValid(currentWord, word)) {
          if (word === endWord) {
            return level;
          }
          // Add word to next queue
          nextQueue.push(word);
          // Remove word
        } else {
          nextWordList.push(word);
        }
      }
      wordList = nextWordList;
      nextWordList = [];
    }
    queue = nextQueue; // Replace
    nextQueue = [];
  }
  return 0;
};

var transformValid = function(w1, w2) {
  const n = w1.length;
  for (let i = 0; i < w1.length; i++) {
    if (
      w1.substring(0, i) === w2.substring(0, i) &&
      w1.substring(i + 1, n) === w2.substring(i + 1, n)
    ) {
      return true;
    }
  }
  return false;
};
