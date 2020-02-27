/**
 * 
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let l = 0;
  let r = points.length - 1;
  while (l <= r) {
    mid = sort(points, l, r); // (Mid + 1) represents how many elements are k-smallest
    if (mid + 1 === K) {
      break;
    } else if (mid + 1 > K) {
      r = mid - 1; // Left side is too long, we want make it shorter. the length of left side after mid-1 is (mid-1)+1
    } else {
      l = mid + 1;
    }
  }
  return points.slice(0, K);
};

// function sort(points, l, r) {
//   const pivot = points[l];
//   const pivotDistance = distance(pivot);
//   let i = l;
//   while (i <= r) {
//     if (distance(points[i]) < pivotDistance) {
//       swap(points, i, l);
//       l += 1;
//       i += 1;
//     } else if (distance(points[i]) > pivotDistance) {
//       swap(points, i, r);
//       r -= 1;
//     } else {
//       i++;
//     }
//   }
  //      smaller   eql   bigger (l and r should fall on equal)
  // |------------|-----|-------------|
  //              l     r
//   return r; // 0 -> r is sorted (r+1 elements are the left side are k-smallest)
// }

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function distance(point) {
  return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
}



function quicksort(nums, l, r) {
  let pivot = distance(nums[l]);

  swap(nums, l, r);
  let i = l; 
  let j = l;
  while(j<=r-1) {
    if(distance(nums[j]) <= pivot) {
      swap(nums,i, j);
      i+=1;
      j+=1;
    } else {
      j+=1
    }
  }
  swap(nums, i, r);
  console.log(nums)
  return i;
}
const nums = [8,3,6,11,4,10]
console.log(quicksort(nums, 2, nums.length-1))