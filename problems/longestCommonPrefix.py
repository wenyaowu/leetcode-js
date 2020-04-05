"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
"""
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        longestCommon = strs[0]
        for s in strs[1::]:
            p = 0
            while p < len(longestCommon) and p < len(s):
                if longestCommon[p] == s[p]:
                    p += 1
                else:
                    longestCommon = longestCommon[0:p]
                    break
            longestCommon = longestCommon[0:p]        
        return longestCommon