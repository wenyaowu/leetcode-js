import heapq
class Solution(object):
    def connectSticks(self, sticks):
        """
        :type sticks: List[int]
        :rtype: int
        """
        
        heapq.heapify(sticks)
        sum = 0
        while len(sticks) > 1:
            v1 = heapq.heappop(sticks)
            v2 = heapq.heappop(sticks)
            sum+= v1+v2
            heapq.heappush(sticks, v1+v2)
        return sum
