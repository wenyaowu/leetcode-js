"""
Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
"""
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        
        m,n = len(matrix), len(matrix[0])
        lo = matrix[0][0]
        hi = matrix[m-1][n-1]

        while lo < hi:
            mid = (lo+hi)//2
            smallerAndEqual = self.countSmallerAndEqual(mid, matrix)
            if smallerAndEqual > k-1: # Too big 
                hi = mid # We need to includ mid value cause there might be couple
                # values that are equal to mid value so the mid value CAN be the finall value
            else:
                lo = mid+1
        return lo
        

    def countSmallerAndEqual(self, value, matrix):
        count = 0
        m,n = len(matrix), len(matrix[0])
        for i in range(m):
            for j in range(n):
                if matrix[i][j] <= value:
                    count+=1
                else:
                    break
        return count

