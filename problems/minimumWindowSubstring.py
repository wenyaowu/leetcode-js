"""
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
"""


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t:
            return ""

        needed = len(t)
        lookup = {}   
        for char in t: 
            if char not in lookup.keys():
                lookup[char] = 1    
            else:
                lookup[char] += 1

        minLength = sys.maxsize
        minString = ""
        head = 0
        tail = 0
        while head < len(s):
            if s[head] in lookup.keys():
                
                if lookup[s[head]] > 0:
                    needed -= 1
                lookup[s[head]] -= 1

                while needed == 0:
                    # We have all needed chars, move head
                    if s[tail] in lookup.keys():
                        if lookup[s[tail]] == 0:
                            # The last character, calculate the length
                            length = head - tail + 1
                            if length < minLength:
                                minString = s[tail:head+1]
                                minLength = length
                            needed += 1
                        lookup[s[tail]] += 1
                    tail += 1
            head += 1

        return minString
