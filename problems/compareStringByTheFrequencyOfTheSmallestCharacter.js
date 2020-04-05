/*
Let's define a function f(s) over a non-empty string s, 
which calculates the frequency of the smallest character in s. 
For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, 
return an integer array answer, 
where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

 

Example 1:

Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
Example 2:
                                       [1,1,1,1] => [3,2,1,0]
Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). 
On the second query both f("aaa") and f("aaaa") are both > f("cc").
 

Constraints:

1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] are English lowercase letters. */
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const frequencies = new Array(12).fill(0);
  for (word of words) {
    frequencies[frequency(word)] += 1;
  }
  for (let i = frequencies.length - 2; i > 0; i--) {
    frequencies[i] = frequencies[i] + frequencies[i + 1];
  }
  return queries.map(q => {
    return frequencies[frequency(q)];
  });
};

function frequency(s) {
  let currentValue = Number.MAX_SAFE_INTEGER;
  let count = 0;

  for (let char of s) {
    let val = charToNum(char);
    if (val === currentValue) {
      count += 1;
    } else if (val < currentValue) {
      currentValue = val;
      count = 1;
    }
  }
  return count;
}

function charToNum(char) {
  return char.charCodeAt(0);
}
