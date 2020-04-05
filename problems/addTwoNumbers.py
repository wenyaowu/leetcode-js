# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1 and not l2:
            return None
        carry = 0
        dummy = ListNode(0)
        head = dummy
        while l1 and l2:
            sum = l1.val + l2.val + carry
            carry = int(sum / 10)
            head.next = ListNode(sum % 10)
            head = head.next
            l1 = l1.next
            l2 = l2.next
        while l1:
            sum = l1.val + carry
            carry = carry = int(sum / 10)
            head.next = ListNode(sum % 10)
            head = head.next
            l1 = l1.next
        while l2:
            sum = l2.val + carry
            carry = carry = int(sum / 10)
            head.next = ListNode(sum % 10)
            head = head.next
            l2 = l2.next
        if carry:
            head.next = ListNode(carry)
        return dummy.next