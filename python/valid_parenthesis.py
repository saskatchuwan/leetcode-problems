#https://leetcode.com/problems/valid-parentheses/
def isValid(s):
    if s == '':
        return True

    legend = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    stack = []
    for bracket in s:
        if bracket in legend.keys():
            stack.append(bracket)
            continue
            
        elif bracket in legend.values():
            
            if len(stack) != 0:
                pair = stack.pop()
                if legend[pair] == bracket:
                    continue
                else:
                    return False
            else:
                return False
    if len(stack) == 0:
        return True
    else:
        return False