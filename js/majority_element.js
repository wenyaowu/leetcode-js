/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const hash = {};
    for (let num of nums) {
        if(hash[num]) {
            hash[num]+=1;
        }
        else {
            hash[num] = 1;
        }

        if(hash[num] > n/2) {
            return num;
        }
    }
};