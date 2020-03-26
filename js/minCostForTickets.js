/*
In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

Train tickets are sold in 3 different ways:

a 1-day pass is sold for costs[0] dollars;
a 7-day pass is sold for costs[1] dollars;
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.

 

Example 1:

Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: 
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.
Example 2:

Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation: 
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.
 

Note:

1 <= days.length <= 365
1 <= days[i] <= 365
days is in strictly increasing order.
costs.length == 3
1 <= costs[i] <= 1000 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const dp = new Array(366).fill(Number.MAX_VALUE);
  const lookup = {};
  for (let d of days) {
    lookup[d] = true;
  }
  dp[0] = 0;
  for (let i = 1; i < 366; i++) {
    if (!lookup[i]) {
      //non travel date
      dp[i] = dp[i - 1]; //<----Key
    } else {

      /**
       * when i - k < 0, meaning that the starting date is less than day 0
       * For example, buy a 7 days ticket at 5th day.
       * We will just take dp[0] or 0 as the previous cost to calculate
       */
      dp[i] = Math.min(
        dp[Math.max(i - 1, 0)] + costs[0],
        dp[Math.max(i - 7, 0)] + costs[1],
        dp[Math.max(i - 30, 0)] + costs[2]
      );
    }
  }
  return dp[365];
};

// Recursion
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  let minCost = Number.MAX_VALUE;
  const plan = [1, 7, 30];
  dfs(0, 0);
  return minCost;

  function dfs(idx, currentTotal) {
    if (idx === days.length) {
      minCost = Math.min(minCost, currentTotal);
      return;
    }
    let currentDay = days[idx];

    for (let i = 0; i < 3; i++) {
      let p = idx;
      while (currentDay + plan[i] - 1 >= days[p]) {
        p += 1;
      }
      dfs(p, currentTotal + costs[i]);
    }
  }
};
