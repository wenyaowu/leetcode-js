/**
 * Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
 */

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.word = false;
    }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    for(let c of word) {
        let idx = charToNum(c);
        if(!current.children[idx]) {
            current.children[idx] = new TrieNode();
        }
        current = current.children[idx];
    }
    current.word = true;; // Last node
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.searchFrom(word, 0, this.root);
};

WordDictionary.prototype.searchFrom = function(word, i, node) {
    if(i === word.length) {
        return node.word
    }
    let char = word[i];
    let idx = charToNum(char);
    if(char === ".") {
        for(let child of node.children) {
            if(child && this.searchFrom(word, i+1, child)) {
                return true;
            }
        }
        return false;
    } else {
        if(!node.children[idx]) {
            return false;
        }
        return this.searchFrom(word, i+1, node.children[idx])
    }
};


function charToNum(char) {
    return char.charCodeAt(0) - "a".charCodeAt(0);
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */