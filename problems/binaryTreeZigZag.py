"""Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        
        direction = 1

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
            res.append(currentLevel[::direction])
            stack = nextStack
            nextStack = []
            currentLevel = []
            direction = -1 if direction == 1 else 1
        return res