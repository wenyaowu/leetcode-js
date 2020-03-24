/**
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 * 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0;
    let r = s.length-1;
    
    if(isPalindrome(s, l, r)){
        return true;
    }
    while(l < r) {
        if(s[l] !== s[r]) {
            return isPalindrome(s, l, r-1) || isPalindrome(s, l+1, r); // Either remove r or remove l
        }
        else { // s[l] === s[r] keep moving
            l+=1;
            r-=1;
        }
    }
    return true;
};

function isPalindrome(s, l, r) {
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
}
