/*
Given two sequences pushed and popped with distinct values, 
return true if and only if this could have been the result of a sequence of 
push and pop operations on an initially empty stack.

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
 

Note:

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed is a permutation of popped.
pushed and popped have distinct values. */
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    return dfs(stack, pushed, popped);
};

function dfs(stack, pushed, popped) {
    // Success
    if(stack.length === 0 && pushed.length === 0 && popped.length === 0) {
        return true;
    }
    // Fail 
    if(pushed === 0 && stack[stack.length-1] !== popped[0]) {
        return false;
    }

    // Push
    if(pushed.length > 0) {
        stack.push(pushed[0]);
        if(dfs(stack, pushed.slice(1), popped)) {
            return true;
        }
        stack.pop();
    }
    // Pop
    if(stack.length > 0 && stack[stack.length-1] === popped[0]) {
        let val = stack.pop();
        if(dfs(stack, pushed, popped.slice(1))) {
            return true;
        }
        stack.push(val);
    }
    
    return false;

}


var validateStackSequences = function(pushed, popped) {
    // because they both have distinct values
    let i = 0; // track popped
    const stack = [];
    for(let val of pushed) {
        stack.push(val);
        while(stack.length > 0 && popped[i] == stack[stack.length-1]) {
            stack.pop()
            i+=1;
        }
    }
    return stack.length === 0;
};