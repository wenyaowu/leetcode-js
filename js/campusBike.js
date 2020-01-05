/**
 * On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.

Our goal is to assign a bike to each worker. Among the available bikes and workers, we choose the (worker, bike) pair with the shortest Manhattan distance between each other, and assign the bike to that worker. (If there are multiple (worker, bike) pairs with the same shortest Manhattan distance, we choose the pair with the smallest worker index; if there are multiple ways to do that, we choose the pair with the smallest bike index). We repeat this process until there are no available workers.

The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

Return a vector ans of length N, where ans[i] is the index (0-indexed) of the bike that the i-th worker is assigned to.

 */
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
  let distanceBuckets = new Array(2001).fill(0).map(() => []);
  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      let w = workers[i];
      let b = bikes[j];
      distanceBuckets[distance(w, b)].push([i, j]); // <workerId, bikeId>
    }
  }

  let res = new Array(workers.length).fill(-1);
  let usedBike = new Array(bikes.length).fill(false);
  let assignedWorkerCount = 0;
  for (let i = 0; i < distanceBuckets.length; i++) {
    for (let j = 0; j < distanceBuckets[i].length; j++) {
      let bikeId = distanceBuckets[i][j][1];
      let workerId = distanceBuckets[i][j][0];
      if (!usedBike[bikeId] && res[workerId] === -1) {
        //Bike is not assigned, worker is not assigned
        res[workerId] = bikeId;
        assignedWorkerCount += 1;
        usedBike[bikeId] = true;
      }

      if (assignedWorkerCount === workers.length) {
        return res;
      }
    }
  }
};

var distance = function(x, y) {
  return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
};
