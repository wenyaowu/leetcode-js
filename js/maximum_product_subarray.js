/**
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];
    for(let i of nums.slice(1, nums.length)) {
        tempCurrentMax = Math.max(currentMax * i, currentMin * i, i);
        tempCurrentMin = Math.min(currentMax * i, currentMin * i, i);
        if(tempCurrentMax > max) {
            max = tempCurrentMax;
        }
        currentMax = tempCurrentMax;
        currentMin = tempCurrentMin;
    }
    return max
};
