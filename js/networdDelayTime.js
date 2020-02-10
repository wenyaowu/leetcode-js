/*
There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

 

Example 1:



Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2
 

Note:

N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100. */
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const graph = getGraph(N, times);
  let shortest = new Array(N + 1).fill(Number.MAX_VALUE);
  // let visited = new Array(N+1).fill(false);
  let queue = [{ n: K, d: 0 }];
  while (queue.length) {
    let { n, d } = queue.shift();
    if (shortest[n] <= d) {
      continue;
    }
    shortest[n] = d;
    for (let child of graph[n]) {
      // push each child node to queue
      queue.push({ n: child.n, d: d + child.d });
    }
  }

  let maxDistance = 0;
  for (let i = 1; i < N + 1; i++) {
    if (shortest[i] === Number.MAX_VALUE) {
      return -1;
    } else {
      maxDistance = Math.max(maxDistance, shortest[i]);
    }
  }
  return maxDistance;
};

function getGraph(N, times) {
  const graph = new Array(N + 1).fill(0).map(() => []);
  for (let t of times) {
    graph[t[0]].push({ n: t[1], d: t[2] });
  }
  return graph;
}
