/*
Given an int array nums and an int target, find how many unique pairs in the array such that their sum is equal to target. Return the number of pairs.

Example 1:

Input: nums = [1, 1, 2, 45, 46, 46], target = 47
Output: 2
Explanation:
1 + 46 = 47
2 + 45 = 47
Example 2:

Input: nums = [1, 1], target = 2
Output: 1
Explanation:
1 + 1 = 2
Example 3:

Input: nums = [1, 5, 1, 5], target = 6
Output: 1
Explanation:
[1, 5] and [5, 1] are considered the same.
Related problems:

https://leetcode.com/problems/two-sum
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted */

function twoSumUniquePairs(nums, target) {
  const pair = {};
  const lookup = {};
  let count = 0;
  for (let num of nums) {
    if (lookup[num]) {
      if (!exists(num, target - num)) {
        count += 1;
        pair[`${num}-${target - num}`] = true;
      }
    } else {
      lookup[target - num] = true;
    }
  }

  return count;

  function exists(num1, num2) {
    return pair[`${num1}-${num2}`] || pair[`${num2}-${num1}`];
  }
}

console.log(twoSumUniquePairs([1, 1, 2, 45, 46, 46], 47));
console.log(twoSumUniquePairs([1, 1], 2));
console.log(twoSumUniquePairs([1, 5, 1, 5], 6));
