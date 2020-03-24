/*Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

 

Example 1:

Input: A = [4,7,9,10], K = 1
Output: 5
Explanation: 
The first missing number is 5.
Example 2:

Input: A = [4,7,9,10], K = 3
Output: 8
Explanation: 
The missing numbers are [5,6,8,...], hence the third missing number is 8.
Example 3:

Input: A = [1,2,4], K = 3
Output: 6
Explanation: 
The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 

Note:

1 <= A.length <= 50000
1 <= A[i] <= 1e7
1 <= K <= 1e8 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  const m = nums.length;
  const missing = new Array(m).fill(0);
  for (let i = 1; i < m; i++) {
    missing[i] = nums[i] - nums[i - 1] - 1 + missing[i - 1];
  }
  // Find the largest n that's smaller than k (the far right one)
  let index = binarySearch(missing, k);

  return nums[index] + (k - missing[index]);
};

function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi+1) / 2);
    if (arr[mid] >= target) { // we keep going for the far right one
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }
  return lo;
}