"""
From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).

Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

 

Example 1:

Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
Example 2:

Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
Example 3:

Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 

Constraints:

Both the source and target strings consist of only lowercase English letters from "a"-"z".
The lengths of source and target string are between 1 and 1000.
"""


class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        exist = [False for i in range(26)]
        for char in source:
            exist[self.charToNum(char)] = True
        res = 0
        pt = 0
        ps = 0
        while pt < len(target):
            if not exist[self.charToNum(target[pt])]:
                return -1

            if(target[pt] == source[ps]):
                ps += 1
                pt += 1
                if pt == len(target):
                    break

            while ps < len(source) and target[pt] != source[ps]:
                ps += 1

            if ps == len(source):
                ps = 0
                res += 1
        return res + 1

    def charToNum(self, char):
        return ord(char)-97
