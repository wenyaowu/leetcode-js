/*
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
Example 2:

Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.
 

Note:

1 <= hand.length <= 10000
0 <= hand[i] <= 10^9
1 <= W <= hand.length */

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  // Constructed a hashmap that consist all the number and frequence
  // start from the smallest one, whenever we retrieve a smallest number
  // we will need to look for n+1, n+2,... if we can't find it, it can't ve formed
  const freq = {};
  for (let num of hand) {
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num] += 1;
    }
  }
  for (let num of Object.keys(freq).sort((a, b) => a - b)) {
    num = +num;
    if (freq[num] === 0) {
      continue;
    } else {
      let count = freq[num];
      // check num+1 and num+2 has count >= count
      for (let i = num + 1; i <= num + W - 1; i++) {
        if (freq[i] >= count) {
          freq[i] -= count;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
