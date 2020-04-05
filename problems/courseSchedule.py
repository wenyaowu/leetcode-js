"""
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
"""

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        visited = [False for i in range(numCourses)]
        lookup = self.createLookup(prerequisites, numCourses)
        for i in range(numCourses):
            if self.isCycled(lookup, visited, numCourses, i):
                return False
        return True
        
    def isCycled(self, lookup, visited, numCourses, course):
        if visited[course]:
            return True
        visited[course] = True
        for c in lookup[course]:
            if self.isCycled(lookup, visited, numCourses, c):
                return True
        visited[course] = False
        return False

    def createLookup(self, prerequisites, numCourses):
        lookup = [[] for i in range(numCourses)]
        for p in prerequisites:
            lookup[p[0]].append(p[1])
        return lookup
    