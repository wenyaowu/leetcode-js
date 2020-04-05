/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height || height.length === 0) {
    return 0;
  }

  const n = height.length;
  // find max_left for each height
  let currentMaxLeft = 0;
  let currentMaxRight = 0;
  let maxLefts = new Array(n);
  let maxRights = new Array(n);

  for (let i = 0; i < n; i++) { // Find left right bound of the index
    maxLefts[i] = currentMaxLeft;
    if (currentMaxLeft < height[i]) currentMaxLeft = height[i];
    maxRights[n - i - 1] = currentMaxRight;
    if (currentMaxRight < height[n - i - 1]) currentMaxRight = height[n - i - 1];
  }

  let total = 0;
  for (let j = 0; j < n; j++) {
    let water = Math.min(maxLefts[j], maxRights[j]) - height[j]; // <----- This calculation for the area is the key
    if (water > 0) {
      total += water;
    }
  }
  return total;
};

