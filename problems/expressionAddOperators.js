/*
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Example 1:

Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: [] */
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    
    const res = [];
    dfs(0, "", 0, 0);
    return res;
    function dfs(idx, path, eval, mult) {
        if(idx === num.length) {
            if(eval === target) {
                res.push(path);
            }
            return 
        }
        for(let i = idx; i < num.length; i++) {
            if(i !== idx && num[idx] === "0") { // Break if start with 0 and not only 0
                break;
            }
            let currentNum = +num.substring(idx, i+1);
            if(idx === 0) {
                //First iteration
                dfs(i+1, `${currentNum}`, currentNum, currentNum);
            }
            else {       
                dfs(i+1, `${path}+${currentNum}`, eval + currentNum, currentNum);
                dfs(i+1, `${path}-${currentNum}`, eval - currentNum, -currentNum);
                dfs(i+1, `${path}*${currentNum}`, eval + - mult + mult * currentNum, mult * currentNum);    
            }
        }    
    }
};