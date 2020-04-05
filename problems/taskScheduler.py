"""
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

 

Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

Note:

The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
"""
import collections
import heapq

class Solution(object):
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        # Construnct heap
        heap = [(-freq, char)
                for char, freq in collections.Counter(tasks).items()]
        heapq.heapify(heap)
        time = 0
        
        while len(heap):
            temp = []
            k = n + 1
            while len(heap) and k > 0:
                # Pay attention to k > 0
                # When k > 0, we are able to put the first character again and we should allow it to be push since it still might be the most frequent char in the list
                top = heapq.heappop(heap)
                if(top[0] != -1):
                    temp.append((top[0]+1, top[1]))
                 # Wait time for the most frequent, this can calculate the least space require to have the same task again for the whole sequence
                k -= 1 
                time += 1
            for t in temp:
                heapq.heappush(heap, t)
            # No more item in the heap, break and return right away. Do this before time+=k so we don't add the very last time
            if not len(heap):
                break
            time += k
        return time

