/*
Given a positive integer n, return the number of all possible attendance records with length n, which will be regarded as rewardable. The answer may be very large, return it after mod 109 + 7.

A student attendance record is a string that only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A record is regarded as rewardable if it doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

Example 1:
Input: n = 2
Output: 8 
Explanation:
There are 8 records with length 2 will be regarded as rewardable:
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" won't be regarded as rewardable owing to more than one absent times. 
Note: The value of n won't exceed 100,000. */

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    /**
     * A[n] -> How many valid records end with A for length n
     * L[n] -> How many .......................L
     * P[n] -> ................................P
     * Total[n] = A[n] + L[n] + P[n]
     * 
     * P[n] = A[n-1] + L[n-1] + P[n-1]
     * ----------------------------------------------
     * L[n] = 
     *   if n-1 !== L:
     *     A[n-1] + P[n-1]
     *   if n-1 === L:
     *     A[n-2] + P[n-2]
     *       
     * L[n] = A[n-1] + P[n-1] + A[n-2] + P[n-2]
     * ----------------------------------------------
     * A[n] = noAP[n-1] + noAL[n-1]
     *  
     * 
     */



};