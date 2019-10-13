/**
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const res = [];
  if (!intervals || intervals.length === 0) {
    return res;
  }
  // sort intervals by the starting point
  intervals.sort((a, b) => a[0] - b[0]);
  let currentOverlap = intervals[0];
  for (let interval of intervals.slice(1)) {
    if (interval[0] > currentOverlap[1]) {
      res.push(currentOverlap);
      currentOverlap = interval;
      continue;
    }
    if (interval[0] >= currentOverlap[0] && interval[0] <= currentOverlap[1]) {
      if (
        interval[1] >= currentOverlap[0] &&
        interval[1] <= currentOverlap[1]
      ) {
        continue;
      } else {
        currentOverlap[1] = interval[1];
      }
    }
  }
  res.push(currentOverlap);
  return res;
};
