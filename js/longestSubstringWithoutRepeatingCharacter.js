/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dict = {};
    let maxLength = 0;
    let count = 0;
    let high = 0;
    let low = 0;
    while(high < s.length) {
        let c = s[high];
        if(!dict[c]) {
            dict[c] = 0;
        }
        dict[c] += 1;
        if(dict[c] > 1) {
            count += 1;
        }
        
        // Optimize
        while(count > 0) {
            let remove = s[low];
            dict[remove] -= 1;
            if(dict[remove] === 1) {
                count -= 1;
            }
            low += 1
        }
        
        if(high - low + 1 > maxLength) {
            maxLength = high - low + 1
        }
        
        high += 1;
    }
    return maxLength
};