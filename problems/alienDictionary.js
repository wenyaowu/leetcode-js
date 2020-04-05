/*
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine. */
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = getGraph(words);
  const res = [];
  const visited = Object.keys(graph).reduce((accum, current) => {
    accum[current] = 0;
    return accum;
  }, {});
  for (let char of Object.keys(graph)) {
    if (!topologicalSort(char, visited, res, graph)) {
      return "";
    }
  }
  return res.reverse().join("");
};

function topologicalSort(char, visited, res, graph) {
  if (visited[char] === 1) {
    return false;
  }
  if (visited[char] === 2) {
    return true;
  }

  visited[char] = 1;
  for (let c of graph[char].values()) {
    if (!topologicalSort(c, visited, res, graph)) {
      return false;
    }
  }
  res.push(char);
  visited[char] = 2;
  return true;
}

function getGraph(words) {
  const graph = {};
  for (let w of words) {
    for (let c of w) {
      if (!graph[c]) {
        graph[c] = new Set();
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    w1 = words[i];
    w2 = words[i + 1];
    let n = Math.min(w1.length, w2.length);
    for (let k = 0; k < n; k++) {
      if (w1[k] !== w2[k]) {
        graph[w1[k]].add(w2[k]);
        break;
      }
    }
  }
  return graph;
}
