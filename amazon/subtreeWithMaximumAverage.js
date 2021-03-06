/*
Given an N-ary tree, find the subtree with the maximum average. Return the root of the subtree.
A subtree of a tree is the node which have at least 1 child plus all its descendants. 
The average value of a subtree is the sum of its values, divided by the number of nodes.

Example 1:

Input:
		 20
	   /   \
	 12     18
  /  |  \   / \
11   2   3 15  8

Output: 18
Explanation:
There are 3 nodes which have children in this tree:
12 => (11 + 2 + 3 + 12) / 4 = 7
18 => (18 + 15 + 8) / 3 = 13.67
20 => (12 + 11 + 2 + 3 + 18 + 15 + 8 + 20) / 8 = 11.125

18 has the maximum average so output 18. */

function subtreeMaximumAverage(root) {
  if (!root) {
    return 0;
  }
  let maxAverage = Number.MIN_VALUE;
  dfs(root);
  return maxAverage;

  function dfs(node) {
    if (!node) {
      return { n: 0, sum: 0 };
    }
    let sum = node.val;
    let n = 1;
    for (let child of node.children) {
      let x = dfs(child);
      sum += x.sum;
      n += x.n;
    }
    maxAverage = Math.max(maxAverage, sum / n);
    return { n, sum };
  }
}
