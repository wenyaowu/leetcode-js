/*
On a single threaded CPU, we execute some functions.  Each function has a unique id between 0 and N-1.

We store logs in timestamp order that describe when a function is entered or exited.

Each log is a string with this format: "{function_id}:{"start" | "end"}:{timestamp}".  For example, "0:start:3" means the function with id 0 started at the beginning of timestamp 3.  "1:end:2" means the function with id 1 ended at the end of timestamp 2.

A function's exclusive time is the number of units of time spent in this function.  Note that this does not include any recursive calls to child functions.

The CPU is single threaded which means that only one function is being executed at a given time unit.

Return the exclusive time of each function, sorted by their function id.

 

Example 1:



Input:
n = 2
logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3, 4]
Explanation:
Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time. 
So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
 

Note:

1 <= n <= 100
Two functions won't start or end at the same time.
Functions will always log when they exit.
  */
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const stack = [];
  const res = new Array(n).fill(0);
  let pre = 0;
  for (let l of logs) {
    let curr = l.split(":");
    if (curr[1] === "start") {
      if (stack.length > 0) {
        // If there's a previous executing task
        // add execute time to previous task casue new task is starting
        let prevTaskNum = stack[stack.length - 1];
        res[prevTaskNum] += +curr[2] - pre; // It's not the end of the task (Use example)
      }
      // push the new task to stack
      stack.push(+curr[0]);
      // start of current task
      pre = +curr[2];
    } else {
      //if it's end
      // Pop the top one since it must be the same task
      let task = stack.pop();
      res[task] += +curr[2] - pre + 1; // +1 because "end" time is included 
      // Start of next task should NOT include the current end casue current end belongs to current task
      pre = +curr[2] + 1;
    }
  }
  return res;
};