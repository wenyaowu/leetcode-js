"""
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
"""
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Use sorted word for kep
        lookup = {}
        for s in strs:
            key = ''.join(sorted(s))
            if key not in lookup.keys():
                lookup[key] = [s]
            else:
                lookup[key].append(s)
        return lookup.values()