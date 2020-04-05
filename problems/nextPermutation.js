/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // Equal or increase
    i -= 1;
  }
  if (i === -1) {
    return reverse(nums, 0, nums.length - 1);
  }
  let j = nums.length - 1;
  while (nums[j] <= nums[i]) {
    // Find next larger, the equal doesn't count. If we don't increase this digit and just reverse order it will be even smaller than original
    j -= 1;
  }
  swap(nums, i, j);
  reverse(nums, i + 1, nums.length - 1);
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverse(arr, i, j) {
  while (i <= j) {
    swap(arr, i, j);
    i += 1;
    j -= 1;
  }
}
