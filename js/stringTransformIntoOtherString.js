/*
Given two strings str1 and str2 of the same length, determine whether you can transform str1 into str2 by doing zero or more conversions.

In one conversion you can convert all occurrences of one character in str1 to any other lowercase English character.

Return true if and only if you can transform str1 into str2.

 

Example 1:

Input: str1 = "aabcc", str2 = "ccdee"
Output: true
Explanation: Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. Note that the order of conversions matter.
Example 2:

Input: str1 = "leetcode", str2 = "codeleet"
Output: false
Explanation: There is no way to transform str1 to str2.
 
Note:

1 <= str1.length == str2.length <= 10^4
Both str1 and str2 contain only lowercase English letters. */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
    /**
     * if key set size < 26, meaning that there's unused character that can be used as temp
     * but if key size == 26 ---> if multiple chars map to same char, we can create unused char
     * c1, c2 -> c3, first c1->c2 now c1 is unused
     *
     *
     */
    if(str1 === str2){
        return true;
    }
    let dict = {};
    for (let i = 0; i < str1.length; i++) {
      if (dict[str1[i]] && dict[str1[i]] !== str2[i]) {
        return false;
      }
      dict[str1[i]] = str2[i];
    }
    return new Set(Object.values(dict)).size < 26;
  };
  