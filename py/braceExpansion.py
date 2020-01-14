"""
A string S represents a list of words.

Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, "{a,b,c}" represents options ["a", "b", "c"].

For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

Return all words that can be formed in this manner, in lexicographical order.

 

Example 1:

Input: "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]
Example 2:

Input: "abcd"
Output: ["abcd"]
 

Note:

1 <= S.length <= 50
There are no nested curly brackets.
All characters inside a pair of consecutive opening and ending curly brackets are different.
"""
class Solution:
    def expand(self, S: str) -> List[str]:
        res = []
        self.backtracking(res, 0, S, "")
        return res
    def backtracking(self, res, idx, S, current):
        if idx == len(S):
            res.append(current)
        else:
            if S[idx] == "{":
                pointer = idx+1
                while S[pointer]!="}":
                    pointer+=1
                chars = S[idx+1:pointer].split(",")
                for char in chars:
                    self.backtracking(res, pointer+1, S, current+char)
            else:
                self.backtracking(res, idx+1, S, current+S[idx])