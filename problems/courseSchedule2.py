"""
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
"""

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        lookup = self.createLookup(prerequisites, numCourses)
        # 0 not visited 1 visiting 2 visited
        visited = [0 for i in range(numCourses)]
        order = []
        for i in range(numCourses):
            if(self.dfs(i, visited, lookup, order)):
                return []
        return order
    
    
    def dfs(self, course, visited, lookup, order):
        if visited[course] == 1:  # Cyclic
            return True
        if visited[course] == 2:  # Already add to order
            return False
        
        visited[course] = 1
        for c in lookup[course]:
            if(self.dfs(c, visited, lookup, order)):
                return True
        visited[course] = 2
        order.append(course)
        return False
    
    def createLookup(self, prerequisites, numCourses):
        lookup = [[] for i in range(numCourses)]
        for p in prerequisites:
            lookup[p[0]].append(p[1])
        return lookup
    