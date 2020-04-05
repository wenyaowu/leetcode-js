/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle. */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let minTotal = Number.MAX_VALUE;
    
    const h = triangle.length;
    
    const dp = new Array(triangle.length).fill(0).map((_, idx)=> new Array(idx+1).fill(0));
    
    // initialize
    for(let i = 0; i < triangle[h-1].length; i++) {
        dp[h-1][i] = triangle[h-1][i];
    }

    for(let i = h-2; i >= 0; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
        }
    }
    return dp[0][0];
};