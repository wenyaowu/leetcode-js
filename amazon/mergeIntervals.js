/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature. */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals || !intervals.length) {
    return [];
  }
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let current = intervals[0];

  for(let i = 1; i < sorted.length; i++) {
    let interval = sorted[i];
    if(interval[0] > current[1]){
        res.push(current);
        current = interval;
    }
    else if(interval[1] > current[1]) {
        current[1] = interval[1]
    }
  } 

  res.push(current);
  return res;
};
