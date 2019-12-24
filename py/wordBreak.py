"""
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
"""


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        lookup = self.dictToList(wordDict)
        
        dp = [False for i in range(len(s))+1]
        dp[0] = True # Init value -> "" always in lookup 

        for i in range(1, len(s)+1):
            for j in range(0, i):
                if dp[j] and s[j:i] in lookup.keys():
                    dp[i] = True

        return dp[len(s)]
    

    def dictToList(self, wordDict):
        res = {}
        for word in wordDict:
            res[word] = True
        return res
