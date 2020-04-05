import heapq

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.maxHeap = [] # <--------- We use Max heap to maintain the k smallest (Smaller Half), because every time we pop, it will pop out the largest element
        self.minHeap = [] # <--------- Min heap to maintain k largest

        #!!!Therefore we use maxHeap to keep the smaller half of the array and minHeap for larger half of the array


    def addNum(self, num: int) -> None:
        temp = heapq.heappushpop(self.maxHeap, -num)
        heapq.heappush(self.minHeap, -temp)
        if len(self.maxHeap) < len(self.minHeap):
            heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))

    def findMedian(self) -> float:
        if len(self.maxHeap) == len(self.minHeap):
            return (-self.maxHeap[0] + self.minHeap[0])/2
        return -self.maxHeap[0]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()