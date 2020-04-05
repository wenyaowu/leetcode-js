"""
Given a non-empty string s and an integer k, rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

Example 1:

Input: s = "aabbcc", k = 3
Output: "abcabc" 
Explanation: The same letters are at least distance 3 from each other.
Example 2:

Input: s = "aaabc", k = 3
Output: "" 
Explanation: It is not possible to rearrange the string.
Example 3:

Input: s = "aaadbbcc", k = 2
Output: "abacabcd"
Explanation: The same letters are at least distance 2 from each other.
"""
import heapq
import collections

class Solution(object):
    def rearrangeString(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """

        heap = [(-freq, char)
                for char, freq in collections.Counter(s).items()]  # Max Heap
        heapq.heapify(heap)
        nextValidIndex = [0 for i in range(26)]

        res = []
        while(res < len(s)):
            nextChar = self.getNextValidChar(res.length, k, heap, nextValidIndex)
            if not nextChar:
                return ""
            else:
                res.append(nextChar)
        return "".join(res)

    def getNextValidChar(self, index, k, heap, nextValidIndex):
        temp = []
        while heap.length:
            negFreq, char = heapq.heappop(heap)
            freq = -negFreq
            charIndex = charToNum(char)
            if nextValidIndex[charIndex] <= index:  # Valid
                # Update count
                if freq > 1:
                    heapq.heappush((negFreq+1, char))
                # Update next valid
                nextValidIndex[charIndex] = index+k
                for i in temp:  # Push back the one that we didn't use
                    heapq.heappush(i)
                return char
            else:  # Not Valid
                temp.append[(-freq, char)]
        return None


def charToNum(char):
    return ord(char)-97
