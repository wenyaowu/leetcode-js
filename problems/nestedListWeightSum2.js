/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  let totalDepth = 0;
  let queue = [...nestedList];
  let res = 0;
  // Find the total depth
  while (queue.length > 0) {
    totalDepth += 1;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      let list = current.getList();
      if (list) {
        queue = [...queue, ...list];
      }
    }
  }

  dfs(nestedList, 0);
  return res;

  function dfs(nestedList, currentDepth) {
    for (let i = 0; i < nestedList.length; i++) {
      if (nestedList[i].isInteger()) {
        res += nestedList[i].getInteger() * (totalDepth - currentDepth);
      } else {
        dfs(nestedList[i].getList(), currentDepth + 1);
      }
    }
  }
};


/**
 * 
 Advance way. The lower level will be pass in and add multiple times
 */
var depthSumInverse = function(nestedList) {
  return dfs(nestedList, 0);
  
  function dfs(list, preSum) {
    let currentSum = preSum;
    let nextLevel = [];
    for (let l of list) {
      if (l.isInteger()) {
        currentSum += l.getInteger();
      } else {
        nextLevel = [...nextLevel, ...l.getList()];
      }
    }

    let listSum = nextLevel.length > 0 ? dfs(nextLevel, currentSum) : 0;
    return currentSum + listSum;
  }
};
