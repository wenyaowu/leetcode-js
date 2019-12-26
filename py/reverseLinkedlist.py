"""
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
"""
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        
        prevNode = None
        currentNode = head
        while currentNode:
            temp = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = temp
        return prevNode