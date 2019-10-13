/**
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let row of board) {
    if (!check(row)) {
      return false;
    }
  }
  for (let i = 0; i <= 9; i++) {
    let column = board.map(row => row[i]);
    if (!check(column)) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    // row
    for (let j = 0; j < 3; j++) {
      //column
      let box = board
        .slice(i * 3, i * 3 + 3)
        .map(row => row.slice(j * 3, j * 3 + 3));
      if (!checkSubbox(box)) {
        return false;
      }
    }
  }

  return true;
};

function check(row) {
  const lookup = {};
  for (let i of row) {
    if (i === ".") {
      continue;
    }
    if (i <= 0 || i >= 10) {
      return false;
    }
    if (i > 0 && i < 10 && i !== ".") {
      if (lookup[i]) {
        return false;
      } else {
        lookup[i] = true;
      }
    }
  }
  return true;
}

function checkSubbox(box) {
    box = box.reduce((acc, val) => acc.concat(val), []);
    return check(box);
}
