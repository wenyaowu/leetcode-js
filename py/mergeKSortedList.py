"""
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
"""
import heapq

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        h = []
        for idx, l in enumerate(lists):
            if l:
                heapq.heappush([], (l.val, idx, l))
        head = dummy = ListNode(0)
        while len(h) > 0:
            t = heapq.heappop(h)
            node = t[2]
            if(node.next):
                heapq.heappush(h, (node.next.val, t[1], node.next))
            head.next = node
            head = head.next
        return dummy.next
