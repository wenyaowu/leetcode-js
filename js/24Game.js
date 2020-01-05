/*
You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

Example 1:
Input: [4, 1, 8, 7]
Output: True
Explanation: (8-4) * (7-1) = 24
Example 2:
Input: [1, 2, 1, 2]
Output: False
Note:
The division operator / represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
Every operation done is between two numbers. In particular, we cannot use - as a unary operator. For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
You cannot concatenate numbers together. For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12. */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Find all the possible combinations (since there are only 4 numbers so the combinations are limited)
 */
var judgePoint24 = function(nums) {
  if (nums.length === 1) {
    return Math.abs(24 - nums[0]) < 0.0001; // Approx towards 24
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let combinations = calculate(nums[i], nums[j]);
      let arr = nums.filter((v, idx) => idx !== j && idx !== i);
      for (let c of combinations) {
        arr.push(c);
        if (judgePoint24(arr)) {
          return true;
        }
        arr.pop();
      }
    }
  }
  return false;
};

var calculate = function(a, b) {
  // Calculate all the possible combinations
  let res = [a * b, a + b, a - b, b - a];
  if (b > 0) {
    res.push(a / b);
  }
  if (a > 0) {
    res.push(b / a);
  }
  return res;
};
