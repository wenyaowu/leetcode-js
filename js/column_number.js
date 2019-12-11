/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27 // 1 + 26 AA->AZ 27->52
    AB -> 28 // 2 + 26 

    BA -> 53 // lookup[char] * 26^1 + 26^0
    ...

    BAA -> B * 26^2 + 
    length = 3 
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB" 
Output: 28
Example 3:

Input: "ZY"
Output: 701
 */

 /**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

    const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lookup = {};
    for(let i = 0; i<chars.length; i++) {
        lookup[chars[i]] = i+1;
    }

    let res = 0;
    for(let i = 0; i < s.length; i++) {
        res += Math.pow(26, s.length - i -1) * lookup[s[i]];
    }
    return res;
};