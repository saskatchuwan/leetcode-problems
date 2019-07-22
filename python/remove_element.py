def removeElement(nums, val):
    max = len(nums)
    idx = 0
    
    while idx < max:
        if nums[idx] == val:
            popped = nums.pop(idx)
            nums.append(popped)
            max -= 1
            idx = 0
            continue
            
        idx += 1
        
    
    return max