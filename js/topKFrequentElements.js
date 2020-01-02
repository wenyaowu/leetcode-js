/*

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /**
     * Becasue we are not looking for kth element but top k elements
     * we can use bucket sort to only group the nums instead of calculate the actual number which will give us
     * O(n) time complexity
     */

    const bucket = new Array(nums.length).fill(0).map(()=>[]);
    // index i -> appear i+1 time
    const res = [];
  
    const count = {};
    for (let num of nums) {
      if (!count[num]) {
        count[num] = 1;
      } else {
        count[num] += 1;
      }
    }
    for (let key of Object.keys(count)) {
      bucket[count[key] - 1].push(key);
    }
  
    for (let i = bucket.length - 1; i >= 0; i--) {
      for (let num of bucket[i]) {
        res.push(num);
        if (res.length === k) {
          return res;
        }
      }
    }
  };
  