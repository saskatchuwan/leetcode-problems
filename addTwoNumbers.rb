# Link: https://leetcode.com/problems/add-two-numbers/

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

def add_two_numbers(l1, l2)
    int1 = list_to_int(l1)
    int2 = list_to_int(l2)
    sum = int1 + int2
    
    sum_arr = sum.to_s.split("").map{|el| ListNode.new(el.to_i)}.reverse
    
    sum_arr.each_with_index do |node, idx|
        next_node = sum_arr[idx+1]
        node.next = next_node
    end
    
    return sum_arr[0]
end

def list_to_int(list_node)
    str = []
    
    node = list_node

    until node.nil?

        str.unshift(node.val.to_s)
        node = node.next
    end
    
    str.join("").to_i
end