/*
Given an array of strings products and a string searchWord. 
We want to design a system that suggests at most three product names from products after each character of searchWord is typed. 
Suggested products should have common prefix with the searchWord.
If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters. */

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.words = [];
  }
  add(word) {
    this.words.push(word);
    this.words.sort((a, b) => {
      if (b > a) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    while (this.words.length > 3) { // Keep only top 3
      this.words.pop();
    }
  }
}

class SearchEngine {
  constructor(products) {
    this.root = this.buildTries(products);
    this.current = this.root;
  }

  search(char) {
    if(!this.current) {
        return [];
    }
    const idx = charToNum(char);
    if(!this.current.children[idx]) {
        this.current = null;
        return [];
    }
    this.current = this.current.children[idx];
    return this.current.words;
  }

  buildTries(products) {
    const root = new TrieNode();
    for (let p of products) {
      let current = root;
      for (let c of p) {
        let idx = charToNum(c);
        if (!current.children[idx]) {
          current.children[idx] = new TrieNode();
        }
        current = current.children[idx];
        current.add(p);
      }
    }
    return root;
  }
}

function charToNum(char) {
  return char.charCodeAt(0) - 97;
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  const engine = new SearchEngine(products);
  const res = [];
  for (let c of searchWord) {
    res.push(engine.search(c));
  }
  return res;
};
