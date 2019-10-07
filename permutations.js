/**
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    if(!nums || nums.length <= 1) {
        return [nums];
    }
    // perm([1,2,3]) = {1 + perm([2,3])} + {2 + perm([1,3])} + {3 + perm([1,2])} 
    // perm([2,3]) = {2 + perm([3])} + {3 + perm([2])}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let arr = [...nums.slice(0, i), ...nums.slice(i+1, nums.length)];
        let currentResults = permute(arr);
        for(let r of currentResults) {
            res.push([current, ...r]);
        }
    }
    return res;
};