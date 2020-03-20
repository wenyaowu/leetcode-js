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
        last = [-1 for i in range(26)]
        # Construnct heap
        heap = [(-freq, char)
                for char, freq in collections.Counter(tasks).items()]
        heapq.heapify(heap)
        count = 0
        
        while(len(heap) > 0):
            temp = [] # To keep ones that is not qualify for this round
            idle = True
            # Pull the next available task 
            while(len(heap) > 0):
                top = heapq.heappop(heap)
                if(last[charToNum(top[1])] == -1 or last[charToNum(top[1])] < count-n): # Qualify
                     count += 1
                     last[charToNum(top[1])] = count
                     idle = False
                     if(top[0] != -1):
                         heapq.heappush(heap, (top[0]+1, top[1])) # push back
                     break
                else: # Not Qualify
                    temp.append(top)
            if idle:
                count += 1
            for t in temp:
                heapq.heappush(heap, t)
        return count

def charToNum(char):
    return ord(char) - ord("A")


