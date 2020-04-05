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
  const n = nums.length;
  const buckets = new Array(n + 1).fill(0).map(() => []); // 0~n
  const counts = count(nums);
  const res = [];
  for (let key of Object.keys(counts)) {
    buckets[counts[key]].push(key);
  }

  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    for (let num of buckets[i]) {
      res.push(num);
      if (res.length === k) {
        return res;
      }
    }
  }
};

var count = function(nums) {
  const counts = {};
  for (let num of nums) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num] += 1;
    }
  }
  return counts;
};
