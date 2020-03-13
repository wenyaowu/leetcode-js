/*
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence 
ai, aj, ak such that i < j < k and ai < ak < aj. 
Design an algorithm that takes a list of n numbers as input and 
checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0]. */

class Interval {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  // Intervals in stack is ordered by min value of each interval
  const stack = [];
  for (let num of nums) {
    if (stack.length === 0 || num <= stack[stack.length - 1].min) {
      stack.push(new Interval(num, num));
    } else {
      lastInterval = stack[stack.length - 1]; // Has the smallest min
      while (stack.length && num > stack[stack.length - 1].max) {
        // Merging intervals that are already included
        stack.pop();
      }
      if (
        stack.length &&
        stack[stack.length - 1].max > num &&
        stack[stack.length - 1].min < num
      ) {
        return true;
      }
      lastInterval.max = num;
      stack.push(lastInterval);
    }
  }
  return false;
};
