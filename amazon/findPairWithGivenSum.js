/*
Given a list of positive integers nums and an int target, 
return indices of the two numbers such that they add up to a target - 30.

Conditions:

You will pick exactly 2 numbers.
You cannot pick the same element twice.
If you have muliple pairs, select the pair with the largest number.
Example 1:

Input: nums = [1, 10, 25, 35, 60], target = 90
Output: [2, 3]
Explanation:
nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
Example 2:

Input: nums = [20, 50, 40, 25, 30, 10], target = 90
Output: [1, 5]
Explanation:
nums[0] + nums[2] = 20 + 40 = 60 = 90 - 30
nums[1] + nums[5] = 50 + 10 = 60 = 90 - 30
You should return the pair with the largest number. */

function twoSum(arr, target) {
  let res = [];
  const lookup = {};
  let realTarget = target - 30;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (lookup[num] !== undefined) {
      if (!res.length) {
        res = [lookup[num], i];
      } else {
        if (lookup[num] + i > res[0][0] + res[0][1]) {
          res = [lookup[num], i];
        }
      }
    } else {
      lookup[realTarget - num] = i;
    }
  }
  return res.length ? res : null;
}
console.log(twoSum([0, 0, 40, 25, 30, 10], 30))