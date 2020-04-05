"""
You are given a perfect binary tree where all leaves are on the same level, 
and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
"""

"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return None
        stack = [root]
        nextStack = []
        while stack:
            for i in range(len(stack)):
                if i+1 < len(stack):
                    stack[i].next = stack[i+1]

                if stack[i].left:
                    nextStack.append(stack[i].left)
                if stack[i].right:
                    nextStack.append(stack[i].right)
            stack = nextStack
            nextStack = []
        return root
