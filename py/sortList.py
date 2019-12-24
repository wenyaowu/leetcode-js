"""
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head:
            return 
        # Calulate the length
        n = 0
        curr = head
        while curr:
            n += 1
            curr = curr.next
        return self.helper(head, n)

    def helper(self, node, length):
        if length == 1:
            return node
        mid = int(length/2)
        leftHead = node
        for i in range(mid-1):
            leftHead = leftHead.next
        rightHead = leftHead.next
        leftHead.next = None
        left = self.helper(node, mid)
        right = self.helper(rightHead, length - mid)

        return self.mergeList(left, right)

    def mergeList(self, l1, l2):
        dummy = ListNode(0)
        head = dummy
        while l1 and l2:
            if l1.val > l2.val:
                head.next = ListNode(l2.val)
                l2 = l2.next
            else:
                head.next = ListNode(l1.val)
                l1 = l1.next
            head = head.next
        while l1:
            head.next = ListNode(l1.val)
            l1 = l1.next
            head = head.next
        while l2:
            head.next = ListNode(l2.val)
            l2 = l2.next
            head = head.next
        return dummy.next
