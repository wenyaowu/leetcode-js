"""
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / 
operators and empty spaces . 
The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
"""

import math


class Solution:
    def calculate(self, s: str) -> int:
        sum = 0
        stack = []
        lastOperator = '+'
        currentNumber = 0
        # Start with +
        # When it is not number, space, use last operator to calculate
        for i in s:
            if i >= '0' and i <= '9':
                currentNumber = currentNumber * 10 + int(i)
            if i in '+-*/':
                self.operate(lastOperator, currentNumber, stack)
                currentNumber = 0
                lastOperator = i
        self.operate(lastOperator, currentNumber, stack)
        for n in stack:
            sum += n
        return sum

    def operate(self, lastOperator, number, stack):
        if lastOperator == '+':
            stack.append(number)
        if lastOperator == '-':
            stack.append(-number)
        if lastOperator == '*':
            lastNumber = stack.pop()
            stack.append(lastNumber * number)
        if lastOperator == '/':
            
            lastNumber = stack.pop()
            stack.append(int(lastNumber / number))
