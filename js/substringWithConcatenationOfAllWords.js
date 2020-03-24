/*
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) 
in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:

Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: [] */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!words.length || !s) {
        return [];
    }
    const n = words[0].length;
    const m = words.length;
    const totalLength = n * m;
    const res = [];
    let dict = getWordDict(words);
  
    for (let i = 0; i < s.length - totalLength + 1; i++) {
        let sub = s.substring(i, i+n);
        if(dict[sub] !== undefined) { // start searching from i
          let dict = getWordDict(words);
          let count = Object.keys(dict).length;
          let hi = i;
          // let lo = i;
          while(hi < s.length - n + 1) {
              let sub = s.substring(hi, hi+n);
              if(dict[sub]) {
                  dict[sub] -= 1;
                  if(dict[sub] === 0) {
                      count -= 1;
                  }
                  if(count === 0) {
                      res.push(i);
                  }
              }
              else {
                  break;
              }
              hi += n;
          }
        }
    }
    return res;
  };
  
  function getWordDict(words) {
    const dict = {};
    for (let w of words) {
      if (!dict[w]) {
        dict[w] = 1;
      } else {
        dict[w] += 1;
      }
    }
    return dict;
  }
  