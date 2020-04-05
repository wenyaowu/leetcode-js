/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let totalRoom = 0;
  let roomAvailable = 0;
  
  let starts = intervals.map((v) => v[0]).sort((a,b) => a-b);
  let ends = intervals.map((v) => v[1]).sort((a,b) => a-b);
  
  let s = 0; // Pointer for start
  let e = 0; // Pointer for end
  
  while(s < starts.length) {

      if(starts[s] < ends[e]) {
          if(roomAvailable === 0) {
              totalRoom += 1;
              roomAvailable += 1;
          }
          roomAvailable -= 1;
      }
      s += 1;
      

      // Move pointer 2 when certain condition is fulfilled. (in sliding window we use counter)
      while(ends[e] <= starts[s]) {
          roomAvailable += 1;
          e+=1;
      }
  }
  return totalRoom; 
};