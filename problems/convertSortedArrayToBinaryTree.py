"""
Given an array where elements are sorted in ascending order, 
convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the 
following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not nums or len(nums) == 0:
            return None
        
        # Find the mid value, which will be root
        rootIndex = int(len(nums)/2)
        root = TreeNode(nums[rootIndex])
        root.left = self.sortedArrayToBST(nums[0:rootIndex])
        root.right = self.sortedArrayToBST(nums[rootIndex+1::])
        return root
        