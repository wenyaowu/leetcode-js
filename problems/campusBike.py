"""
On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.

Our goal is to assign a bike to each worker. Among the available bikes and workers, we choose the (worker, bike) pair with the shortest Manhattan distance between each other, and assign the bike to that worker. (If there are multiple (worker, bike) pairs with the same shortest Manhattan distance, we choose the pair with the smallest worker index; if there are multiple ways to do that, we choose the pair with the smallest bike index). We repeat this process until there are no available workers.

The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

Return a vector ans of length N, where ans[i] is the index (0-indexed) of the bike that the i-th worker is assigned to.

 
"""


class Solution:
    def assignBikes(self, workers: List[List[int]], bikes: List[List[int]]) -> List[int]:
        distances = [[] for i in range(2001)]
        for wi, w in enumerate(workers):
            for bi, b in enumerate(bikes):
                distances[self.distance(w, b)].append((wi, bi))
        assigned = 0
        res = [-1 for i in range(len(workers))]
        usedBike = [False for i in range(len(bikes))]
        for distance in distances:
            for pair in distance:
                if not usedBike[pair[1]] and res[pair[0]] == -1:
                    res[pair[0]] = pair[1]
                    assigned += 1
                    usedBike[pair[1]] = True
                    if assigned == len(workers):
                        return res

    def distance(self, w, b):
        return abs(w[0]-b[0]) + abs(w[1]-b[1])
