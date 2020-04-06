/*
Given a list of daily temperatures T, return a list such that, for each day in the input, 
tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100]. */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const res = new Array(T.length).fill(0);
    const stack = []; // (temperature, index)
    for(let i = T.length - 1; i >= 0; i--) {
        let curr = T[i];
        while(stack.length && stack[stack.length-1][0] <= curr) {
            // The top of the stack is not useful anymore bc later element will encounter bigger one earlier
            stack.pop();
        }
        if(!stack.length) {
            // non of the item before is bigger
            res[i] = 0;
        }
        else {
            res[i] = stack[stack.length-1][1] - i;
        }
        stack.push([T[i], i]);
    }
    return res;
};