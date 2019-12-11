/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */

 /**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    // !!!!!!!!! the index of this
    // When encounter substring in the problem with the dp, remember that
    // the end index is not included so make sure create n+1 array,
    // so dp[n] ---> s[0:n], n not included
    const n = s.length;
    const lookup = arrayToHashmap(wordDict);
    const dp = new Array(n+1).fill(false);
    // definition for dp[i] => if we can breakword in s[0:i] <-- i not included
    // condition for dp = true
    // ************
    //    j   i
    // dp[j] = true && s[j:i] in wordDict
    dp[0] = true;
    for (let i = 0; i < n+1; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && lookup[s.substring(j, i)]) {
                dp[i] = true;
                continue;
            }
        }
    }

    return dp[n+1];

};


function arrayToHashmap(array){
    const hashmap = {};
    for(let i of array) {
        hashmap[i] = true;
    }
    return hashmap;
}

wordBreak('leetcode', ['leet', 'code']);