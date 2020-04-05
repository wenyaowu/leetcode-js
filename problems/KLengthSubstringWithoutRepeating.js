/*
Given a string S, return the number of substrings of length K with no repeated characters.

 

Example 1:

Input: S = "havefunonleetcode", K = 5
Output: 6
Explanation: 
There are 6 substrings they are : 'havef','avefu','vefun','efuno','etcod','tcode'.
Example 2:

Input: S = "home", K = 5
Output: 0
Explanation: 
Notice K can be larger than the length of S. In this case is not possible to find any substring.
 

Note:

1 <= S.length <= 10^4
All characters of S are lowercase English letters.
1 <= K <= 10^4 */
/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
    if(S.length < K) {
        return [];
    }
    let count = 0;
    const dict = {};
    const res = [];
    for(let i = 0; i < K; i++) {
        let c = S[i];
        if(!dict[c]) {
            dict[c] = 0;
        }
        dict[c] += 1;
        if(dict[c] === 2) {
            count += 1;
        }
    }
    if(count === 0) {
        res.push(S.substring(0, K))
    }
    for(let i = K; i < S.length; i++) {
        let c = S[i];
        if(!dict[c]) {
            dict[c] = 0;
        }
        dict[c] += 1;
        if(dict[c] === 2) {
            count += 1;
        }

        let remove = S[i-K];
        dict[remove] -= 1;
        if(dict[remove] === 1) {
            count -= 1;
        }
        if(count === 0) {
            let s = S.substring(i-K+1, i+1)
            res.push(s);
        }
    }
    return res;

    
};