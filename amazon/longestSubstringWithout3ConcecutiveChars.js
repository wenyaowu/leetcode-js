const Heap = require("collections/heap");
/*
Given A, B, C, find any string of maximum length that can be created such that no 3 consecutive characters are same. 
There can be at max A 'a', B 'b' and C 'c'.

Example 1:

Input: A = 1, B = 1, C = 6
Output: "ccbccacc"
Example 2:

Input: A = 1, B = 2, C = 3
Output: "acbcbc" */

function longest(A, B, C) {
  const heap = new Heap(
    [
      { char: "a", count: A },
      { char: "b", count: B },
      { char: "c", count: C }
    ],
    null,
    (a, b) => {
      if (a.count !== b.count) {
        return a.count - b.count;
      }
      return a.char > b.char;
    }
  );
  const nextValidIndex = new Array(3).fill(0);
  let res = "";
  const temp = []
  while (heap.length > 0) {
    let { char, count } = heap.pop(); // The most frequent one
    let charIdx = charToNum(char);
    let nextIndex = res.length;
    if (nextValidIndex[charIdx] <= nextIndex) {
      // Valid index
      res += char;
      // Update count
      if (count > 1) {
        heap.push({ count: count - 1, char });
      }
      // Update next valid index
      if (nextIndex !== 0 && res[nextIndex - 1] === char) {
        // next one cant be the same char
        nextValidIndex[charIdx] = nextIndex + 2;
      }
      // Push back the non-valid
      while(temp.length) {
          heap.push(temp.pop())
      }
    } else {
      // Not valid
      temp.push({ char, count });
    }
  }

  return res;
}

function charToNum(char) {
  return char.charCodeAt(0)-97;
}


console.log(longest(1,1,6))
console.log(longest(1,2,3))