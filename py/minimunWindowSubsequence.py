"""
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

Input: 
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
 

Note:

All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100].
"""
class Solution:
    def minWindow(self, S: str, T: str) -> str:
        minLength = len(S)
        start = -1
        pt = 0
        ps = 0
        while ps < len(S):
            # First explore
            if T[pt] == S[ps]:
                pt+=1
                ps+=1
                if pt == len(T):
                    # Second Optimize
                    end = ps
                    ps-=1
                    pt-=1
                    
                    while pt >= 0:
                        if T[pt] == S[ps]:
                            pt-=1
                            ps-=1
                        else:
                            ps-=1
                    ps+=1
                    if end-ps < minLength:
                        minLength = end-ps
                        start = ps
                    ps+=1
            else:
                ps+=1
        return S[start:start+minLength] if start!=-1 else ""
        
        