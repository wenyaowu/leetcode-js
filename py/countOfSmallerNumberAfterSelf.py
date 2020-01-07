class TreeNode:
    def __init__(self, val):
        self.val = val
        self.dup = 1
        self.count = 0
        self.left = None
        self.right = None


class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        if not nums or not len(nums):
            return []
        n = len(nums)
        res = [0 for i in range(n)]
        root = TreeNode(nums[n-1])
        for i in range(n-2, -1, -1):
            res[i] = self.insert(nums[i], root)
        return res

    def insert(self, val, root):
        current = root
        count = 0
        while current:
            if current.val == val:
                current.dup += 1
                return count + current.count
            elif current.val > val:
                current.count += 1
                if current.left:
                    current = current.left
                else:
                    current.left = TreeNode(val)
                    return count
            else:
                count += current.count + current.dup
                if current.right:
                    current = current.right
                else:
                    current.right = TreeNode(val)
                    return count
        return count
