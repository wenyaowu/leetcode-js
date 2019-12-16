"""
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # Recursion
    def reverseList(self, head: ListNode) -> ListNode:
        if not head:
            return
        if not head.next: # Only one node
            return head
        next = head.next
        newHead = self.reverseList(head.next)
        next.next = head
        head.next = None
        return newHead
    
    
    
    # Iteration
    # 1->2->3->4->null
    # h  n
    # 1<-2 3->4->null
    #    h n
     def reverseList(self, head: ListNode) -> ListNode:
        if not head:
            return
            
        h = None
        n = head 

        while True:
            temp = n.next
            n.next = h
            h = n
            n = temp
            if not n:
                return h