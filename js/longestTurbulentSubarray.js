/*
A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

 

Example 1:

Input: [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
Example 2:

Input: [4,8,12,16]
Output: 2
Example 3:

Input: [100]
Output: 1
 

Note:

1 <= A.length <= 40000
0 <= A[i] <= 10^9 */
/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    if(A.length <= 2) {
        return A.length;
    }
    let length = 2;
    let diff = A[1]-A[0];
    for(let i = 1; i < A.length-1; i++) {
        let currentDiff = A[i] - A[i+1];
        if(currentDiff * diff >= 0) { // not valid, restart
            length = 2;
        } else {
            length += 1;
        }
        diff = currentDiff
    }
    return length;
};