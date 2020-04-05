/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[] */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const lookup = {};
  const canBreakDict = {};
  for (let word of wordDict) {
    lookup[word] = true;
  }
  const memo = {};
  return dfs(s);

  function dfs(str) {
    if (str.length === 0) {
      return [""];
    }

    if (memo[str]) {  // Memorizing results
      return memo[str];
    }

    const res = [];
    for (let i = 0; i < str.length; i++) {
      let substring = str.substring(0, i + 1);
      if (lookup[substring]) {
        //search
        let remain = str.substring(i + 1);
        if ((canBreakDict[remain] === 1) || (!canBreakDict[remain] && canBreak(remain))) {
          let combo = dfs(remain);
          for (let c of combo) {
            res.push(c.length === 0 ? substring : `${substring} ${c}`);
          }
        }
      }
    }
    memo[str] = res;
    return res;
  }

  function canBreak(s) {
    const m = s.length;
    const dp = new Array(m + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i < dp.length; i++) {
      let idx = i - 1;
      for (let j = 0; j <= idx; j++) {
        let sub = s.substring(j, idx + 1);
        if (lookup[sub] && dp[j]) {
          dp[i] = true;
          break;
        }
      }
    }
    canBreakDict[s] = dp[m] ? 1 : -1;
    return dp[m];
  }
};
