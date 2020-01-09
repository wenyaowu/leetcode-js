"""
Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

 

Example 1:

Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:

Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
"""
class Solution:
    def minAreaRect(self, points: List[List[int]]) -> int:
        minArea = sys.maxsize
        self.lookup = set()

        for p in points:
            self.lookup.add((p[0], p[1]))

        for i in range(len(points)):
            for j in range(i+1, len(points)):
                p1 = points[i]
                p2 = points[j]
                if (p1[0], p2[1]) in self.lookup and (p2[0], p1[1]) in self.lookup:
                    minArea = min(minArea, abs((p1[0]-p2[0]) * (p1[1]-p2[1])))
        return minArea if minArea!=sys.maxsize else 0