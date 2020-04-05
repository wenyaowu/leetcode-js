/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    
    let count = 0;
    backtracking(target);
    return count;

    function backtracking(remain) {
        if(remain === 0) {
            count+=1;
            return;
        }
        if(remain < 0) {
            return;
        }
        for(let num of nums) {
            backtracking(remain - num);
        }
    }
    
};

// Better version (Cache, DP) use [3,2,1], 4 as example see how the cache is calculated 

var combinationSum4 = function(nums, target) {
    const cache = new Array(target+1).fill(-1);
    cache[0] = 1;
    return backtracking(target);


    function backtracking(remain) {
        if(cache[remain] !== -1) {
            return cache[remain]
        }
        let res = 0;
        for(let num of nums) {
            console.log(num)
            if(remain - num >= 0) {
                res += backtracking(remain - num);
            }
        }
        cache[remain] = res;
        return res;
    }
    
};