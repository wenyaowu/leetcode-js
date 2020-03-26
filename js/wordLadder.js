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
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const dict = {};
  for(let w of wordList) {
      dict[w] = true;
  }
  if(!dict[endWord]) {
      return 0;
  }
  const queue = [beginWord]
  const visited = {};
  let level = 1; // The first one is included
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  
  while(queue.length) {
      let size = queue.length;
      for(let i = 0; i < size; i++) {
          let current = queue.shift();
          if(current === endWord) {
              return level;
          }
          for(let i = 0; i < current.length; i++) {
              for(let c of chars) {
                  let s = current.substring(0, i) + c + current.substring(i+1);
                  if(dict[s] && !visited[s]) {
                      queue.push(s);
                      visited[s] = true;
                  }
              }
          }
      }
      level += 1;
  }
  return 0;
};

