/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,7,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,5,6,7]

1,2,2,*7*,0,0
2,*5*,6
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    pf = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[pf] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[pf] = nums2[p2];
      p2 -= 1;
    }
    pf -= 1;
  }

  while (p1 > 0) {
    nums1[pf] = nums1[p1];
    pf--;
    p1--;
  }

  while (p1 > 0) {
    nums1[pf] = nums2[p2];
    pf--;
    p2--;
  }
};
