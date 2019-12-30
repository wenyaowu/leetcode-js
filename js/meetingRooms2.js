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
  let rooms = 0;
  let availableRoom = 0;
  let endPointer = 0;

  const start = intervals.map(i => i[0]).sort((a, b) => a - b);
  const end = intervals.map(i => i[1]).sort((a, b) => a - b);

  for (let i = 0; i < start.length; i++) {
    while (end[endPointer] <= start[i]) { // This step is to release room, if start == end, we release room first
      availableRoom += 1;
      endPointer += 1;
    }
    if (start[i] < end[endPointer]) {
      if (availableRoom === 0) {
        rooms += 1;
      } else {
        availableRoom -= 1;
      }
    }
  }

  return rooms;
};
