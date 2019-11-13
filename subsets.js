/**
 * Given a set of distinct integers, nums, return all possible subsets 
 * (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let num of nums) {
        let curr = [];
        for(let r of res) {
            curr.push([...r, num]);
        }
        res = [...res, ...curr];
    }
    return res;
};

