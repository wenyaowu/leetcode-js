/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((accum, curr) => accum + curr, 0);
  if (sum % k !== 0) {
    return false;
  }
  const visited = new Array(nums.length).fill(false);
  return canPartition(sum / k, 0, 0, k, 0, visited, nums);
};

function canPartition(
  target,
  currentSum,
  currentNums,
  k,
  startIndx,
  visited,
  nums
) {
  if (k === 1) {
    // We need to find one more set and the rest of the nums are guaranteed sum up to target
    return true;
  }
  if (currentSum === target && currentNums > 0) {
    // Finish current subset, find next one
    return canPartition(target, 0, 0, k - 1, 0, visited, nums);
  }

  for (let i = startIndx; i < nums.length; i++) {
    if (!visited[i]) {
      // Keep adding
      visited[i] = true;
      if (
        canPartition(
          target,
          currentSum + nums[i],
          currentNums + 1,
          k,
          i + 1,
          visited,
          nums
        )
      ) {
        return true;
      }
      visited[i] = false;
    }
  }
  return false;
}
