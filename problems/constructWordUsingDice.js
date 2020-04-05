/**
Given a word of length n and n six-sided dice with a character in each side. Find out if this word can be constructed by the set of given dice.

Example 1:

Input:
word = "hello"
dice = [[a, l, c, d, e, f], [a, b, c, d, e, f], [a, b, c, h, e, f], [a, b, c, d, o, f], [a, b, c, l, e, f]]
Output: true
Explanation: dice[2][3] + dice[1][4] + dice[0][1] + dice[4][3] + dice[3][4]
Example 2:

Input:
word = "hello"
dice = [[a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f]]
Output: false
Example 3:

Input:
word = "aaaa"
dice = [[a, a, a, a, a, a], [b, b, b, b, b, b], [a, b, c, d, e, f], [a, b, c, d, e, f]]
Output: false
**/

function solve(word, dice) {
  return helper(0, word, dice);
}

function helper(idx, word, dice) {
  if (idx === word.length) {
    return true;
  }
  for (let d of dice) {
    // Go through each dice to match current char
    for (char of d) {
      // Each char in the dice
      if (char === word[idx]) {
        if (
          helper(
            idx + 1,
            word,
            dice.filter(d2 => d !== d2)
          )
        ) {
          //backtrack
          return true;
        }
        break;
      }
    }
  }
  return false;
}

console.log(
  solve("hello", [
    ["a", "l", "c", "d", "e", "f"],
    ["a", "b", "c", "d", "e", "f"],
    ["a", "b", "c", "h", "e", "f"],
    ["a", "b", "c", "d", "o", "f"],
    ["a", "b", "c", "l", "e", "f"]
  ])
);

console.log(
  solve("hello", [
    ["a", "l", "c", "d", "e", "f"],
    ["a", "b", "c", "d", "e", "f"],
    ["a", "b", "c", "d", "e", "f"],
    ["a", "b", "c", "d", "o", "f"],
    ["a", "b", "c", "l", "e", "f"]
  ])
);

console.log(
  solve("aaaa", [
    [
      ["a", "a", "a", "a", "a", "a"],
      ["b", "b", "b", "b", "b", "b"],
      ["a", "b", "c", "d", "e", "f"],
      ["a", "b", "c", "d", "e", "f"]
    ]
  ])
);
