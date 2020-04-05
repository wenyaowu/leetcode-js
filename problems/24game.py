class Solution:
    def judgePoint24(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return abs(nums[0] - 24) < 0.0001
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                nextNums = []
                for k in range(n):
                    if k != i and k != j:
                        nextNums.append(nums[k])
                combinations = self.compute(nums[i], nums[j])
                for c in combinations:
                    if(self.judgePoint24(nextNums+[c])):
                        return True
        return False

    def compute(self, num1, num2):
        res = [num1+num2, num1*num2, num1-num2, num2-num1]
        if num1 != 0:
            res.append(num2/num1)
        if num2 != 0:
            res.append(num1/num2)
        return res