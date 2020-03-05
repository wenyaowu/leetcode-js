/*
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

 

Example 1:

Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: 
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
Day 8: [0, 0, 0, 0, 0, 1, 1, 1]

6 days a cicle, shift one at a time
8 cicle reset to original

%8 first to see shift how many times
%6 to see which pattern is it (0~5)

Example 2:

Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]
 

Note:

cells.length == 8
cells[i] is in {0, 1}
1 <= N <= 10^9 */


/**
 * 
    Calculating how many steps we need to require to reach from initial state. 
    Example: There is a cycle of number from 1 to n. So cycle may start from 0 but to reach from 1 to again 1 OR 2 to again 2 we need same steps. 
 */



/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  // Try to use code to find pattern
  const lookup = {}; // Quick lookup to find the pattern
  let hasCycle = false;
  let currentCells = cells;
  let cycle = 0; //<----- This is actually NOT the cycle size. It's how many steps required to reach X state from 0
  for (let i = 0; i < N; i++) {
    let next = nextCells(currentCells);
    let key = cellsToString(next);
    if (lookup[key]) {
      hasCycle = true;
      break;
    } else {
      cycle += 1;
      lookup[key] = true;
    }
    currentCells = next;
  }
  if (hasCycle) {
    N = N % cycle;
    for (let i = 0; i < N; i++) {
      currentCells = nextCells(currentCells);
    }
  }
  return currentCells;
};

function nextCells(cells) {
  const newCells = new Array(cells.length).fill(0);
  for (let i = 1; i < cells.length - 1; i++) {
    newCells[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
  }
  return newCells;
}

function cellsToString(cells) {
  return cells.join("");
}

console.log(prisonAfterNDays([1, 1, 0, 0, 0, 0, 1, 1], 7));
