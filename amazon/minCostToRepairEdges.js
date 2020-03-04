/**
 * There's an undirected connected graph with n nodes labeled 1..n. 
 * But some of the edges has been broken disconnecting the graph. 
 * Find the minimum cost to repair the edges so that all the nodes are once again 
 * accessible from each other.

Input:

n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes connected by an edge.
edgesToRepair, a list where each element is a triplet representing the pair of nodes 
between which an edge is currently broken and the cost of repearing that edge, 
respectively (e.g. [1, 2, 12] means to repear an edge between nodes 1 and 2, 
the cost would be 12).
Example 1:

Input: n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], 
edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
Output: 20
Explanation:
There are 3 connected components due to broken edges: [1], [2, 3] and [4, 5].
We can connect these components into a single component by repearing the edges 
between nodes 1 and 2, and nodes 1 and 5 at a minimum cost 12 + 8 = 20.
Example 2:

Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], 
edgesToRepair = [[1, 6, 410], [2, 4, 800]]
Output: 410
Example 3:

Input: n = 6, edges = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], 
edgesToRepair = [[1, 5, 110], [2, 4, 84], [3, 4, 79]]
Output: 79
 */

/**
 * @param {number} N
 * @param {number[][]} edges
 * @param {number[][]} edgesToRepair
 * @return {number}
 */
var minimumCost = function(N, edges, edgesToRepair) {
  let cost = 0;
  const uf = new UnionFind(N);

  const brokenEdgeLookup = {};
  for (let etr of edgesToRepair) {
    let n1 = etr[0] - 1;
    let n2 = etr[1] - 1;
    brokenEdgeLookup[`${n1}-${n2}`] = true;
  }

  // Construct existing span tree
  for (let e of edges) {
    let n1 = e[0] - 1;
    let n2 = e[1] - 1;
    if (!brokenEdgeLookup[`${n1}-${n2}`]) {
      uf.union(n1, n2);
    }
  }

  // Sort cost for greedy
  const costs = edgesToRepair.sort((a, b) => a[2] - b[2]);
  for (let c of costs) {
    let n1 = c[0] - 1;
    let n2 = c[1] - 1;
    if (!uf.connected(n1, n2)) {
      uf.union(n1, n2);
      cost += c[2];
    }
  }

  return uf.components === 1 ? cost : -1;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, idx) => idx);
    this.components = n;
    this.rank = new Array(n).fill(0);
  }

  find(p) {
    let root = p;
    while (this.parent[root] !== root) {
      root = this.parent[root];
    }

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
      return;
    }
    if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      if (this.rank[pRoot] === this.rank[qRoot]) {
        this.rank[qRoot] += 1;
      }
    }
    this.components -= 1;
    console.log(this.parent);
  }
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}

// 20
console.log(
  minimumCost(
    5,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5]
    ],
    [
      [1, 2, 12],
      [3, 4, 30],
      [1, 5, 8]
    ]
  )
);
// 410
console.log(
  minimumCost(
    6,
    [
      [1, 2],
      [2, 3],
      [4, 5],
      [3, 5],
      [1, 6],
      [2, 4]
    ],
    [
      [1, 6, 410],
      [2, 4, 800]
    ]
  )
);
// 79
console.log(
  minimumCost(
    6,
    [
      [1, 2],
      [2, 3],
      [4, 5],
      [5, 6],
      [1, 5],
      [2, 4],
      [3, 4]
    ],
    [
      [1, 5, 110],
      [2, 4, 84],
      [3, 4, 79]
    ]
  )
);
