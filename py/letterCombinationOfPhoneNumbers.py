"""
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
"""


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        lookup = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        if not digits:
            return res
        if len(digits) == 1:
            return [c for c in lookup[digits]]

        chars = lookup[digits[0]]
        combinations = self.letterCombinations(digits[1::])
        for char in chars:
            for combo in combinations:
                res.append(char + combo)
        return res

    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        lookup = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        if not digits:
            return res
        pointer = 0
        while pointer < len(digits):
            if pointer == 0:
                res = [c for c in lookup[digits[pointer]]]
            else:
                temp = []
                for combo in res:
                    for c in lookup[digits[pointer]]:
                        temp.append(combo + c)
                res = temp
            pointer += 1
        return res