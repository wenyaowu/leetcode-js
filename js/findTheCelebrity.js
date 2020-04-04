/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;
        for(let i = 1; i < n; i++) {
            if(knows(candidate, i)) { // Celebrity doest know any one, so this candidate is not valid
                candidate = i;
            }
        }
        // Verfiy
        for(let i = 0; i < n; i++) {
            if(i === candidate) {
                continue;
            }
            if(!knows(i, candidate) || knows(candidate, i)) {
                // Invalid case:
                // (1) If anyone doesn't know candidate
                // (2) If candidate knows anyone
                return -1;
            }
        }
        return candidate;
    };
};