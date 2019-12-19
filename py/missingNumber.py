class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # Gauss
        sum = 0
        for n in nums:
            sum += n

        n = len(nums)
        gausianSum = n*(1+n)/2
        return int(gausianSum - sum)
        
        i = 0
        nums.append('*')
        # Swap number to where it belongs
        while i < len(nums):
            if nums[i] == '*' or nums[i] == i:
                i += 1
            else:
                currentNumber = nums[i]
                temp = nums[currentNumber]
                nums[currentNumber] = currentNumber
                nums[i] = temp    
            
        
        for i in range(len(nums)):
            if nums[i] == '*':
                return i