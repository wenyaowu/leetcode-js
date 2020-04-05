class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if(len(nums1) > len(nums2)):
            return self.findMedianSortedArrays(nums2, nums1)
        m, n = len(nums1), len(nums2)
        lo = 0
        hi = len(nums1) # hi is the element size not the index so the length should be included
        while lo <= hi:
            # Partition represents how many items, not the index
            partitionX = (lo+hi)//2         
            # +1 is for the case of odd total number, we will have one more element on the left so the max of left will be the medium of the two arrays
            partitionY = (m+n+1)//2 - partitionX 
            leftXMax = nums1[partitionX - 1] if partitionX else -sys.maxsize
            leftYMax = nums2[partitionY - 1] if partitionY else -sys.maxsize
            rightXMin = nums1[partitionX] if partitionX != m else sys.maxsize 
            rightYMin = nums2[partitionY] if partitionY != n else sys.maxsize 
            if rightYMin >= leftXMax and rightXMin >= leftYMax:
                if((m+n) % 2 == 0):
                    return (max(leftXMax, leftYMax) + min(rightYMin, rightXMin))/2
                else:
                    return max(leftXMax, leftYMax)
            elif leftXMax > rightYMin:
                hi = partitionX - 1
            else:
                lo = partitionX + 1
        