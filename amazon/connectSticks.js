const Heap = require("collections/heap");
/*
You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.  
You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

 

Example 1:

Input: sticks = [2,4,3]
Output: 14
Example 2:

Input: sticks = [1,8,3,5]
Output: 30
 

Constraints:

1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4 */
/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
  const heap = new Heap(sticks, null, (a, b) => b - a);
  let sum = 0;
  while (heap.length > 1) {
    let v1 = heap.pop();
    let v2 = heap.pop();
    sum += v1 + v2;
    heap.push(v1 + v2);
  }
  return sum;
};
console.log(connectSticks([2, 4, 3]));
