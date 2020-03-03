/*
There are N cities numbered from 1 to N.

You are given connections, where each connections[i] = 
[city1, city2, cost] represents the cost to connect city1 and city2 together.  
(A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) 
that connects those two cities together.  The cost is the sum of the connection costs used. If the task is impossible, return -1.

 

Example 1:



Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
Output: 6
Explanation: 
Choosing any 2 edges will connect all cities so we choose the minimum 2.
Example 2:



Input: N = 4, connections = [[1,2,3],[3,4,4]]
Output: -1
Explanation: 
There is no way to connect all cities even if all edges are used.
 

Note:

1 <= N <= 10000
1 <= connections.length <= 10000
1 <= connections[i][0], connections[i][1] <= N
0 <= connections[i][2] <= 10^5
connections[i][0] != connections[i][1] */
/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
  const uf = new UnionFind(N);
  let sorted = connections.sort((a, b) => a[2] - b[2]);
  let cost = 0;
  for (let e of sorted) {
    let n1 = e[0] - 1;
    let n2 = e[1] - 1;
    if (!uf.connected(n1, n2)) {
      uf.union(n1, n2);
      cost += e[2];
    }
  }
  return uf.components === 1 ? cost : -1;
};

class UnionFind {
  constructor(n) {
    // number of node
    this.parent = new Array(n).fill(0).map((_, idx) => idx);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }

  find(p) {
    // find root for node p
    let root = p;
    while (root !== this.parent[root]) {
      root = this.parent[root];
    }

    // Path compression
    while (p !== root) {
      let temp = this.parent[p];
      this.parent[p] = root;
      p = temp;
    }

    return root;
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot === qRoot) {
      return; // In the same group
    }
    if (this.rank[qRoot] > this.rank[pRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[qRoot] = pRoot;
      this.rank[pRoot] += 1;
    }
    this.components -= 1;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}
