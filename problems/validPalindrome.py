"""
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
"""
import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s == None:
            return False
        s = re.sub(" ", '', s) # Clean space first
        if len(s) == 0:
            return True
        s = re.sub(r'\W+', '', s) # Clean other chars
        
        left = 0
        right = len(s)-1
        while left <= right:
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True