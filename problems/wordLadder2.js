/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const lookup = {};
  const visited = {};
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for(let w of wordList) {
      lookup[w] = true;
  }
  if(!lookup[endWord]) {
      return [];
  }
  const queue = [[beginWord]]
  const res = [];
  let found = false;
  
  while(queue.length) {
      let size = queue.length;
      for(let i = 0; i < size; i++) { // Go through each path
          let current = queue.shift();
          // find all the possible next word
          let lastWord = current[current.length - 1];
          if(lastWord === endWord) {
              res.push(current);
              found = true;
          }
          visited[lastWord] = true; // There's a chance that lastWord will appear again in the next loops, so we need to set it to true here
          for(let j = 0; j < lastWord.length; j++) { 
              for(let c of chars) {
                  let w = lastWord.substring(0,j) + c + lastWord.substring(j+1);
                  if(lookup[w] && !visited[w]) {
                      queue.push([...current, w]);
                  }
              }
          }
          
      }
      if(found) {
          return res;
      }
  }
  return [];  
};