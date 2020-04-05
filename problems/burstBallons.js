/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. 
You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. 
Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:

Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    /**
     * First of all, dp[i][j] in here means, the maximum coins we get after we burst all the balloons 
between i and j in the original array, therefore if left+1 === right, no balloons are in the middle, no balloon to pop, return 0
     */
    const numsWithBoundary = [1, ...nums, 1];
    const m = numsWithBoundary.length;
    const dp = new Array(m).fill(0).map(()=>new Array(m).fill(-1));
    burst(0, m-1);
    
    function burst(left, right) {
        if(left+1 === right) {
            return 0;
        }
        if(dp[left][right] !== -1) {
            return dp[left][right];
        }
        let res = 0;
        for(let i = left+1; i<right; i++) {
            // Burst balloon i when boundary is left and right
            // After we burst i balloon, we separate nums into two sections
            res = Math.max(res, numsWithBoundary[left] * numsWithBoundary[i] * numsWithBoundary[right] + burst(left, i) + burst(i, right))
        }
        dp[left][right] = res;
        return res;
     }
};


