/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let lo = 0;
  let hi = nums1.length;

  let x = nums1.length;
  let y = nums2.length;

  while (lo <= hi) {
    let partitionX = Math.floor((lo + hi) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;
    let leftXMax = partitionX ? nums1[partitionX - 1] : Number.MIN_SAFE_INTEGER;
    let leftYMax = partitionY ? nums2[partitionY - 1] : Number.MIN_SAFE_INTEGER;
    let rightXMin =
      partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
    let rightYMin =
      partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    if (rightYMin >= leftXMax && rightXMin >= leftYMax) {
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(leftYMax, leftXMax) + Math.min(rightXMin, rightYMin)) / 2
        );
      }
      return Math.max(leftXMax, leftYMax);
    } else if (rightYMin < leftXMax) {
      hi = partitionX - 1;
    } else {
      lo = partitionX + 1;
    }
  }
};
