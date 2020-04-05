"""

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
"""


"""

(1)
-----
-------

(2)
-----
      -------

(3)  --> Do not do anything
-------
----
"""

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals: 
            return []
        res = []
        intervals.sort(key=lambda x: x[0])
        currentInterval = intervals[0]
        for i in intervals[1::]:
            if i[0] <= currentInterval[1]: # Case (1)
                if i[1] > currentInterval[1]:
                    currentInterval[1] = i[1]

            else:
                res.append(currentInterval)
                currentInterval = i

        res.append(currentInterval)
        return res