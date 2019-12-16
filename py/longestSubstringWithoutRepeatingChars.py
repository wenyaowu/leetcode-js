"""
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        visited = {}
        head = 0
        tail = 0
        maxLength = 0
        n = len(s)

        while tail < n:
            if s[tail] not in visited or not visited[s[tail]]:
                visited[s[tail]] = 1
            else:
                # visited, move head until head = tail
                while head < tail:
                    if s[head] == s[tail]:
                        maxLength = max(tail - head, maxLength)
                        head += 1
                        break
                    visited[s[head]] = 0
                    head += 1
            tail += 1
        return max(maxLength, tail - head)