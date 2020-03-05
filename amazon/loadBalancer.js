/*
Your server has received a package of N incoming requests. 
Handling the K-th request (for K from 0 to N − 1) will take A[K] seconds.

The load balancer has to drop two acquired requests and distribute the rest of 
them between three workers in such a way that each worker receives a contiguous fragment of requests 
to handle, and finishes handling them in exactly the same moment as the other workers. 
No two workers should receive the same request to compute.

The load balancer's distribution of requests is performed by selecting two requests that will be dropped, 
and which will split the array into three contiguous parts that will be allocated to the workers. 
More precisely, if requests 2 and 5 are chosen by the load balancer from a package of 9 requests, then:

the 0-th to 1-st requests will be handled by the first worker,
the 3-rd to 4-th requests will be handled by the second worker,
the 6-th to 8-th requests will be handled by the third worker.
Such a distribution will be correct if each worker receives requests equalling the same total 
amount of handling time.

Write a function solution that, given an array A of N integers representing the time of execution of 
consecutive tasks, returns true if it is possible for the load balancer to choose two requests that will 
determine an even distribution of requests among three workers, or false otherwise.

Examples:

Given A = [1, 3, 4, 2, 2, 2, 1, 1, 2], the function should return true, 
as choosing requests 2 and 5 results in a distribution giving 4 seconds of handling time to each worker, 
as explained in the following image:

Given A = [1, 1, 1, 1, 1, 1], the function should return false.

Given A = [1, 2, 1, 2, ..., 1, 2] of length 20,000, the function should return true.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [5..100,000];
each element of array A is an integer within the range [1..10,000]. */

function loadBalancer(A) {
  let sum = A.reduce((accu, curr) => accu + curr, 0);
  const m = A.length;
  let left = 1;
  let right = m - 2; // No point for starting at [0, m-1], if we drop those two there will be only one interval
  let leftSum = A[0];
  let rightSum = A[m - 1];

  while (left < right) {
    let dropSum = A[left] + A[right];
    midSum = sum - leftSum - rightSum - dropSum;

    if (leftSum === rightSum && leftSum === midSum) {
      return true;
    }
    if (leftSum < rightSum) {
      // increase left sum
      leftSum += A[left];
      left += 1;
    } else if (leftSum > rightSum) {
      rightSum += A[right];
      right -= 1;
    } else {
      // Move two at the same time
      leftSum += A[left];
      rightSum += A[right];
      right -= 1;
      left += 1;
    }
  }

  return false;
}

console.log(loadBalancer([1, 3, 4, 2, 2, 2, 1, 1, 2]));
console.log(loadBalancer([1, 1, 1, 1, 1, 1]));

console.log(
  loadBalancer(
    new Array(10000).fill(0).reduce((accum, current) => [...accum, 1, 2], [])
  )
);
