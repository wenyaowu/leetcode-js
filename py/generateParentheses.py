"""
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
"""


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        if not n:
            return res
        self.helper(0, 0, n, '', res)
        return res

    def helper(self, left, right, n, current, res):
        if left == right and right == n:
            res.append(current)
            return
        if n > left:
            self.helper(left+1, right, n, current+'(', res)
        if right < left:
            self.helper(left, right+1, n, current+')', res)
        return res
