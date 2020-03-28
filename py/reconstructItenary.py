"""
Given a list of airline tickets represented by pairs of departure 
and arrival airports [from, to], reconstruct the itinerary in order. 
All of the tickets belong to a man who departs from JFK. 
Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the 
itinerary that has the smallest lexical order when read as a single string. 
For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
"""
import heapq

class Solution(object):
    def findItinerary(self, tickets):
        """
        :type tickets: List[List[str]]
        :rtype: List[str]
        """
        self.graph = self.getGraph(tickets)
        self.res = []
        self.dfs("JFK")
        return self.res

    def dfs(self, node):
        neighbors = [] if node not in self.graph else self.graph[node]
        while neighbors and len(neighbors) > 0: # Pop edges one by one until there's no edges
            n = heapq.heappop(neighbors)
            self.dfs(n)
        self.res = [node] + self.res

    def getGraph(self, tickets):
        graph = {}
        for t in tickets:
            if t[0] not in graph:
                graph[t[0]] = []
            heapq.heappush(graph[t[0]],t[1])
        return graph
