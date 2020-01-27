/**
 * Given an array of meeting time intervals consisting of start and end times 
 * [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const n = intervals.length;
  const starts = intervals.map(i => i[0]);
  const ends = intervals.map(i => i[1]);
  let totalRooms = 0;
  let availableRooms = 0;

  let ps = 0;
  let pe = 0;

  while (ps < n) {
    if (starts[ps] < ends[pe]) {
      if (availableRooms > 0) {
        availableRooms -= 1;
      } else {
        totalRooms += 1;
      }
      ps += 1;
    } else {
      while (pe < n && ends[pe] <= starts[ps]) {
        availableRooms += 1;
        pe += 1;
      }
    }
  }
  return totalRooms;
};
