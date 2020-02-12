/*
Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.

Given a list of query words, return the number of words that are stretchy. 

 

Example:
Input: 
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
 

Notes:

0 <= len(S) <= 100.
0 <= len(words) <= 100.
0 <= len(words[i]) <= 100.
S and all words in words consist only of lowercase letters */
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    let count = 0
    for(let w of words) {
        if(check(S, w)) {
            count+=1;
        }
    }
    return count;
};

function check(s, w) {
    const m = s.length;
    const n = w.length;
    let i = 0;
    let j = 0;
    let i1 = 0;
    let j1 = 0;
    while(i < m && j < n) {
        if(s[i] !== w[j]) {
            return false;
        }
        while(i1 < m && s[i1] === s[i]) {
            i1+=1;
        }
        while(j1 < n && w[j1] === w[j]) {
            j1+=1;
        }
        
        if(i1-i !== j1-j && i1-i < Math.max(3, j1-j)) {
            /**
             * Two valid case:
             * (1) the segment hassame length
             * (2) if segment in word has less than 3, theres should be more than 3 characters in S
             *     if segment in word has more than 4 characters, there should be at least the same in S
             */
            return false
        }
        i = i1;
        j = j1;
    }
    return i === m && j === n;
}

console.log(expressiveWords("heeellooo",
["hello", "hi", "helo"]))