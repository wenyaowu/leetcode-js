"""
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:

    

    def maxPathSum(self, root: TreeNode) -> int:
        self.maxPathSum = -sys.maxsize
        self.helper(root)
        return self.maxPathSum
        
    def helper(self, node):    
        # For a node, there will be 4 posibility
        # (1) Node itself
        # (2) Node + left path sum
        # (3) Node + right path sum
        # (4) Nide + left + right path sum
        # Therefore we can decide if we want to choose to include left/right path or not
        if not node:
            return 0
        # 0 means we don't include left
        leftPathSum = max(0, self.helper(node.left))
        rightPathSum = max(0, self.helper(node.right))
        self.maxPathSum = max(self.maxPathSum, node.val + leftPathSum + rightPathSum)
        # The return value, to the parent node, we can only include left or right (or neither)

        """
                 p
                /
               c
             /   \
            l     r          to p node, it's either l+c or r+c or c. 
        """
        # So we choose whichever is bigger between left and right
        return max(leftPathSum, rightPathSum)+node.val
