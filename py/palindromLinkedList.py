"""
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
"""

"""
1<-2  3->4
   p  c  t    
"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
import math

class Solution:

    # Reverse linkedlist
    def isPalindrome(self, head: ListNode) -> bool:
        if not head:
            return True
        cloned = self.cloneLinkedList(head)
        reversedHead = self.reverseLinkedList(cloned)
        while head:
            if(head.val != reversedHead.val):
                return False
            head = head.next
            reversedHead = reversedHead.next
        return True

    def reverseLinkedList(self, head):
        prev = None
        curr = head
        while True:
            if not curr:
                return prev
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

    def cloneLinkedList(self, head):
        dummy = curr = ListNode(0)
        while head:
            curr.next = ListNode(head.val)
            curr = curr.next
            head = head.next
        return dummy.next

    # Use stack

    def isPalindrome(self, head: ListNode) -> bool:
        if not head:
            return True
        n = self.getLinkedListLength(head)
        stack = []
        # 5 -> push 2
        # 4 -> push 2
        for i in range(math.floor(n/2)):
            stack.append(head.val)
            head = head.next
        if n % 2 == 1:
            head = head.next
        while stack:
            if(stack.pop() != head.val):
                return False
            head = head.next
        return True

    def getLinkedListLength(self, head):
        length = 0
        while head:
            length += 1
            head = head.next
        return length
    # Question: How do you do it in O(1) memory?
