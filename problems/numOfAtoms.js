/*
Given a chemical formula (given as a string), return the count of each atom.

An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

Example 1:
Input: 
formula = "H2O"
Output: "H2O"
Explanation: 
The count of elements are {'H': 2, 'O': 1}.
Example 2:
Input: 
formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: 
The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
Example 3:
Input: 
formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: 
The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
Note:

All atom names consist of lowercase letters, except for the first character which is uppercase.
The length of formula will be in the range [1, 1000].
formula will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem. */
/**
 * @param {string} formula
 * @return {string}
 */

var countOfAtoms = function(formula) {
  let table = {};
  let weight = 1; // Common weight for current "()"
  const stack = []; // To save last multipliers so we can reset (reduce) weight when close "("
  const n = formula.length;

  let i = n - 1;
  while (i >= 0) {
    let low = ""; // For processing current element
    let count = 1; // Always start with 1 for each element
    if (isDigit(formula[i])) {
      // parse the number out to use it later
      let end = i;
      while (i>=0 && isDigit(formula[i])) {
        i -= 1;
      }
      count = +formula.substring(i + 1, end + 1);  
    } 
    if (formula[i] === ")") {
      // We know from now on whatever element we have ,the weight will be weight+count until we meet "("
      weight *= count;
      stack.push(count); // Use to reset later
    } else if (formula[i] === "(") {
      // Reset the weight
      let last = stack.pop();
      weight = weight/last;
    } else if (!isUpper(formula[i])) {
      let end = i;
      while (!isUpper(formula[i])) {
        low = formula[i] + low;
        i -= 1;
      }
      low = formula.substring(i + 1, end + 1);
    }
    if (isUpper(formula[i])) {
      let currentElement = formula[i] + low;
      add(table, currentElement, weight * count);
    }
    i -= 1;
  }

  let res = "";
  for (let key of Object.keys(table).sort()) {
    res += `${key}${table[key] > 1 ? table[key] : ""}`;
  }
  return res;
};

function add(map, element, times) {
  if (!map[element]) {
    map[element] = times;
  } else {
    map[element] += times;
  }
}

function isUpper(char) {
  return char.toUpperCase() === char && char.toLowerCase() !== char;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}
