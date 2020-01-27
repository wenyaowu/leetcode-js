"""
Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
"""
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        self.maxLength = 0
        self.helper(s, k)
        return self.maxLength

    def helper(self, s, k):
        lookup = {}
        for char in s:
            if char not in lookup:
                lookup[char] = 1
            else:
                lookup[char] += 1
        for key in lookup.keys():
            if lookup[key] < k:
                for substring in s.split(key):
                    self.helper(substring, k)
                return
        self.maxLength = max(self.maxLength, len(s))

        
