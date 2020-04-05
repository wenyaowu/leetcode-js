"""
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
"""
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []
        self.helper(0, [], res, s)
        return res

    def helper(self, idx, currRes, res, s):
        if idx == len(s):
            res.append(currRes.copy())
        else :
            for i in range(idx, len(s)):
                currentString = s[idx:i+1]
                if(self.isPalindrome(currentString)):
                    currRes.append(currentString)
                    self.helper(i+1, currRes, res, s)
                    currRes.pop()

    def isPalindrome(self, s):
        return s == s[::-1]