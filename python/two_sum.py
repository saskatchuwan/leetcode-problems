#https://leetcode.com/problems/two-sum/
def twoSum(nums, target):
    store = {}
    
    for i in range(len(nums)):

        complement = target - nums[i]

        if complement in store:
            return [store[complement], i]
        else:
            store[nums[i]] = i
            
    return [];