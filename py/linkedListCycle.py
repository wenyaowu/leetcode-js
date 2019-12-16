"""
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        # Solution1: Hashmap

        # Solution2: 
        """
            a + b + n + b = 2a + 2b
            n = a
        """
        if not head or not head.next:
            return None
        fast = head.next.next
        slow = head.next
        while fast and fast.next:
            if slow == fast:
                slow2 = head
                while slow and slow2:
                    if slow == slow2:
                        return slow
                    slow = slow.next
                    slow2 = slow2.next
            fast = fast.next.next
            slow = slow.next
        return None

