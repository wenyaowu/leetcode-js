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
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
  let rooms = 0;
  let available = 0;
  let endPointer = 0;

  for (let i = 0; i < starts.length; i++) {
    while (ends[endPointer] <= starts[i]) {
      available += 1;
      endPointer += 1;
    }
    if (available === 0) {
      rooms += 1;
    } else {
      available -= 1;
    }
  }

  return rooms;
};
