# https://leetcode.com/problems/reverse-integer/
def reverse(x):
    stringified_int = str(x)
    arr = list(stringified_int)
    arr.reverse()
    
    output = None
    
    if arr[-1] == '-':
        arr = arr[:-1]
        reversed_str = ''.join(arr)

        output = int(reversed_str) * -1
    else:
        reversed_str = ''.join(arr)
        output = int(reversed_str)
        
    upper_bound = (2**31) - 1
    lower_bound = (-2**31)
    
    if output > upper_bound or output < lower_bound:
        return 0
    else:
        return output