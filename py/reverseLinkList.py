"""
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
          h  n     rh
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # Iterative
    def reverseList(self, head: ListNode) -> ListNode:
        
        # null -> 1 -> 2 -> 3
        #   c     n    t
        # temp = n.next
        # n.next = c
        # null <- 1 2 -> 3 -> null
        #         c n    
        # c = n
        # n = temp
        # null <- 1 <- 2 3 -> null
        #              c n
        # null <- 1 <- 2 <- 3 null
        #                   c  n
        c = None
        n = head
        while(n):
            temp = n.next
            n.next = c
            c = n
            n = temp
        return c

    # Recursion
    def reverseList(self, head: ListNode) -> ListNode:
        if not head: 
            return None
        if not head.next:
            return head # One node left
        # Base Case
        n = head.next
        rh = self.reverseList(head.next)
        n.next = head
        head.next = None # <--- If we dont do this, it will end of being a loop:
        # 1 <- 2  <-> 3 <- 4 <-5
        #      h      n        rh
        return rh