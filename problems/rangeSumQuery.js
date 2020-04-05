/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if(!matrix || !matrix[0]) {
        return;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    
    const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    
    dp[0][0] = matrix[0][0];
    for(let i = 1; i < m; i++) {
        dp[i][0] = dp[i-1][0] + matrix[i][0];
    }
    for(let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + matrix[0][j];
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = matrix[i][j] + dp[i-1][j] + dp[i][j-1] -dp[i-1][j-1];
        }
    }
    this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
    return this.dp[row2][col2] - (row1 === 0 ? 0 : this.dp[row1-1][col2]) - (col1 === 0 ? 0 : this.dp[row2][col1-1]) + (row1 === 0 || col1 === 0 ? 0 : this.dp[row1-1][col1-1]);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */