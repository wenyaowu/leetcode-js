/**Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]
[-2, -2, 1, -4, -2, -3]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1 = 0:5 - 0:1 = -3 - -2 = -1
sumRange(2, 4) -> 0:4 - 0:1 = -2 - -2 = 0
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function. */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = 0;
    this.accumSum = nums.reduce((accum, current)=>{
       sum+=current;
       accum.push(sum);
       return accum;
    }, []);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.accumSum[j] - (i-1 < 0 ? 0 : this.accumSum[i-1]);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */