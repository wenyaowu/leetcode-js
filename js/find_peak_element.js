/**
 * A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    const curr = [...nums, -Number.POSITIVE_INFINITY];
    const prev = [-Number.POSITIVE_INFINITY, ...nums];
    const diff = [];

    for(let i = 0; i < curr.length; i++) {
        diff[i] = curr[i] - prev[i];
    }

    for(let i = 0; i < curr.length-1; i++) {
        if(diff[i] > 0 && diff[i+1] < 0) {
            return i;
        }
    }

    // [1,2,3,1, -Infinity]

    // [-Infinity, 1,2,3,1] // prev

    // [Infinity, 1,1,-2,-Infinity] // nums - prev
};
