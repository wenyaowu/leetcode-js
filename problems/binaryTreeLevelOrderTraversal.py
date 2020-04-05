"""Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root:
            return res
        stack = [root]

        while len(stack) > 0:
            nextStack = []
            currentLevel = []
            for n in stack:
                currentLevel.append(n.val)
                if(n.left):
                    nextStack.append(n.left)
                if(n.right):
                    nextStack.append(n.right)
            res.append(currentLevel)
            stack = nextStack
            nextStack = []
            currentLevel = []
        return res
