class UnionFind {
  constructor(n) {
    this.rank = new Array(n).fill(0);
    this.root = new Array(n).fill(0).map((_, idx) => idx);
    this.components = n;
  }

  find(p) {
    let root = p;
    while (root !== this.root[root]) {
      root = this.root[root];
    }

    while (p !== root) {
      let temp = this.root[p];
      this.root[p] = root;
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
      this.root[qRoot] = pRoot;
    } else if (this.rank[pRoot] < this.rank[qRoot]) {
      this.root[pRoot] = qRoot;
    } else {
      this.root[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
    this.components -= 1;
  }

  connected(p, q) {
    return this.root[p] === this.root[q];
  }
}

function criticalRouters(numNodes, numEdges, edges) {
  const criticalRouters = [];
  for (let i = 0; i < numNodes; i++) {
    // Remove each node
    let unionFind = new UnionFind(numNodes);
    for (let e of edges) {
      if (e[0] === i || e[1] === i) {
        continue;
      }
      unionFind.union(e[0], e[1]);
    }
    if (unionFind.components === 3) {
      criticalRouters.push(i);
    }
  }
  return criticalRouters;
}

// 2,3,5
console.log(
  criticalRouters(7, 7, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 5],
    [5, 6],
    [3, 4]
  ])
);

// 0,3
console.log(
  criticalRouters(5, 5, [
    [1, 2],
    [0, 1],
    [2, 0],
    [0, 3],
    [3, 4]
  ])
);

// []
console.log(
  criticalRouters(4, 3, [
    [0, 1],
    [1, 2],
    [2, 3]
  ])
);

// 3
console.log(
  criticalRouters(6, 7, [
    [0, 3],
    [0, 1],
    [3, 2],
    [1, 2],
    [2, 4],
    [2, 5],
    [4, 5]
  ])
);
