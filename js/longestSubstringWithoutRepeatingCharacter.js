/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lookup = {};
    let head = 0;
    let tail = 0;
    let longest = 0;
    
    while (head < s.length) {
        if(!lookup[s[head]]) {
            lookup[s[head]]=1;
        }
        else {
            longest = Math.max(longest, head - tail)
            while(s[tail]!==s[head]) {
                lookup[s[tail]]-=1
                tail += 1;
            }
            //When leaves while, tail is point to the dup character
            tail+=1; // point to the next one to continue searching
        }
        head += 1;
    }

    len = head - tail;
    longest = Math.max(longest, head - tail)
    return longest
};