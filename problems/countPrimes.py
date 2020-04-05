"""
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                            n-1
"""
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        isPrime = [True for i in range(n)]
        count = 0
        for i in range(2, n):
            if isPrime[i]:
                count += 1
                multiplier=2
                currentNumber = i*multiplier
                while currentNumber < n:
                    isPrime[currentNumber] = False
                    multiplier+=1
                    currentNumber = i*multiplier
        return count
        