/*
Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. 
Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. Return a list of ids of selected elements. If no pair is possible, return an empty list.

Example 1:

Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7

Output: [[2, 1]]

Explanation:
There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.
Example 2:

Input:
a = [[1, 3], [2, 5], [3, 7], [4, 10]]
b = [[1, 2], [2, 3], [3, 4], [4, 5]]
target = 10

Output: [[2, 4], [3, 2]]

Explanation:
There are two pairs possible. Element with id = 2 from the list `a` has a value 5, and element with id = 4 from the list `b` also has a value 5.
Combined, they add up to 10. Similarily, element with id = 3 from `a` has a value 7, and element with id = 2 from `b` has a value 3.
These also add up to 10. Therefore, the optimal pairs are [2, 4] and [3, 2].
Example 3:

Input:
a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 10], [3, 14]]
target = 20

Output: [[3, 1]]
Example 4:

Input:
a = [[1, 8], [2, 15], [3, 9]]
b = [[1, 8], [2, 11], [3, 12]]
target = 20

Output: [[1, 3], [3, 2]] */

function twoSumClosest(a, b, target) {
  a = a.sort((x, y) => x[1] - y[1]);
  b = b.sort((x, y) => x[1] - y[1]);
  let maxPossibleSum = Number.MIN_VALUE;
  let res = [];
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = n - 1;
  while (i < m && j > 0) {
    let sum = a[i][1] + b[j][1];
    if (sum > target) {
      j -= 1;
    } else {
      // We only process further if the current sum is larger or equal to the current possible largest sum.
      // If it's smaller, then it's not going to be answer.
      if (maxPossibleSum <= sum) {
        // We find a more optimal sum value, replace the current one and reset res
        if (sum > maxPossibleSum) {
          maxPossibleSum = sum;
          res = [];
        }
        res.push([a[i][0], b[j][0]]);
        let idx = j - 1;
        while (idx >= 0 && b[idx][1] === b[idx + 1][1]) {
          res.push([a[i][0], b[idx][0]]);
          idx -= 1;
        }
      }
      i += 1;
    }
  }
  return res;
}

console.log(
  twoSumClosest(
    [
      [1, 3],
      [2, 5],
      [3, 7],
      [4, 10]
    ],
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5]
    ],
    10
  )
);

/**
 *
 * This version can only find one best solution
 */
function twoSumClosestSimplified(a, b, target) {
  a = a.sort((x, y) => x[1] - y[1]);
  b = b.sort((x, y) => x[1] - y[1]);
  let maxPossibleSum = Number.MIN_VALUE;
  let res = [];
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    let sum = a[i][1] + b[j][1];
    if (sum > target) {
      // out of bound
      j -= 1;
    } else {
      if (sum >= maxPossibleSum) {
        if (sum > maxPossibleSum) {
          maxPossibleSum = sum; // Update the current maximum
          res = [];
        }
        res.push([a[i][0], b[j][0]]);
        /**
         * To find all solution we need
         * (1) add to res if the sum === maxPossibleSum
         * (2) to add a logic here to go through all the possible results by decreasing b
         */
        let index = j - 1;
        while (index >= 0 && b[index][1] === b[index + 1][1]) {
          res.push([a[i][0], b[index][0]]);
          index -= 1;
        }
      }
      i += 1;
    }
  }
  return res;
}
