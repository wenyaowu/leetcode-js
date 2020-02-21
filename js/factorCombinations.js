/*
Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note:

You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Example 1:

Input: 1
Output: []
Example 2:

Input: 37
Output:[]
Example 3:

Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
Example 4:

Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
] */
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    const res = [];
    backtracking(n, [], 2);
    return res;

    function backtracking(currentNum, currentCombo, start) {
        if(currentNum === 1 && currentCombo.length > 0) {
            res.push(currentCombo);
            return;
        }

        for(let i = start; i < n; i++) { // How to avoid duplicate, adding start
            if(currentNum % i === 0) {
                backtracking(currentNum / i, [...currentCombo, i], i)
            }
        }
    }
};