/**
 * 
Given n non-negative integers representing the histogram's bar 
height where the width of each bar is 1, find the area of largest rectangle in the histogram.
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const lessThanLeft = new Array(heights.length).fill(-1);
  const lessThanRight = new Array(heights.length).fill(heights.length);
  let maxArea = 0;

  for (let i = 1; i < heights.length; i++) {
    let p = i - 1;
    while (p >= 0 && heights[i] <= heights[p]) {
      p = lessThanLeft[p]; // Keep looking towards left (p = lessThanLeft) until find first smaller than
      // the loop stop when p = lessThanLeft[0] = -1
    }
    lessThanLeft[i] = p;
  }

  for (let i = heights.length - 2; i >= 0; i--) {
    let p = i + 1;
    while (p < heights.length && heights[i] <= heights[p]) {
      p = lessThanRight[p];
    }
    lessThanRight[i] = p;
  }

  for (let i = 0; i < heights.length; i++) {
    maxArea = Math.max(
      maxArea,
      heights[i] * (lessThanRight[i] - lessThanLeft[i] - 1)
    );
  }
  return maxArea;
};
