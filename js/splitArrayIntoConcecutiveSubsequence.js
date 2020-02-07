/*
Given an array nums sorted in ascending order, return true if and only if you can split it into 1 or more subsequences such that each subsequence consists of consecutive integers and has length at least 3.

 

Example 1:

Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5

Example 2:

Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5

Example 3:

Input: [1,2,3,4,4,5]
Output: False
 

Constraints:

1 <= nums.length <= 10000 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let frequency = {} // How many time the number shows up
    let appendAvailability = {} // How many time can a number be appened to a existing sequence
    for(let n of nums) {
        if(!frequency[n]) {
            frequency[n] = 1;
        }
        else {
            frequency[n] += 1;
        }
    }
    for(let n of nums) {
        // Number needs to be able to either
        // (1) append to current sequence (check appendAvailability)
        // (2) start a new sequence (needs to have i+1 and i+2)
        // Otherwise we can't split
        if(frequency[n] === 0) continue // We have used this number in (2)
        if(appendAvailability[n] > 0) { // can append
            appendAvailability[n] -= 1;
            
            if(!appendAvailability[n+1]) { // Next number can be appended
                appendAvailability[n+1] = 1;
            } else {
                appendAvailability[n+1] += 1;
            }
        } else if (frequency[n+1] > 0 &&  frequency[n+2] > 0) {
            frequency[n+1] -= 1;
            frequency[n+2] -= 1;
            if(!appendAvailability[n+3]) { 
                appendAvailability[n+3] = 1;
            } else {
                appendAvailability[n+3] += 1;
            }
        } else {
            return false;
        } 
        frequency[n] -= 1;
    }
    return true;
};