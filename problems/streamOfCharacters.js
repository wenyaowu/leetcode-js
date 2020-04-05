class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.word = false;
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.root = new TrieNode();
  this.term = "";
  for (let w of words) {
    add(w, this.root);
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.term += letter;
  return search(this.root, this.term);
};

function search(root, s) {
  let current = root;
  for (let i = s.length-1; i>=0; i--) {
    let index = charToNum(s[i]);
    if (current.children[index]) {
      current = current.children[index];
      if(current.word) {
          return true;
      }
    } else {
      return false;
    }
  }
  return false;
}

function add(word, root) {
  let current = root;
  for (let i = word.length-1; i>=0; i--) {
    let idx = charToNum(word[i]);
    if (!current.children[idx]) {
      current.children[idx] = new TrieNode();
    }
    current = current.children[idx];
  }
  current.word = true;
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

function charToNum(char) {
  return char.charCodeAt(0) - 97;
}
