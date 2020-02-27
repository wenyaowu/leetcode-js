/*
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation. */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const visited = {}; // record if each wors is visited
  const lookup = {};
  let found = false;
  const res = [];
  for (let word of wordList) {
    lookup[word] = true;
  }
  if (!lookup[endWord]) {
    return [];
  }
  const queue = [[beginWord]];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      // current level
      let currentList = queue.shift();
      let lastWord = currentList[currentList.length - 1];
      if (lastWord === endWord) {
        res.push(currentList);
        found = true;
      }
      visited[lastWord] = true;
      for (let w of wordList) {
        if (!visited[w] && isValid(w, lastWord)) {
          queue.push([...currentList, w]);
        }
      }
    }
    if (found) {
      return res;
    }
  }
  return [];
};

var isValid = function(w1, w2) {
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
