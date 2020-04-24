import random

# Problem 1
# Write a function using random.randint to generate an index, use that index to pick a random element of a list and return it.
def random_element(fruit_list):
    return random.choice(fruit_list)

# print(random_element(['apples', 'bananas', 'pears'])) # 'apples', 'bananas' or 'pears'

# Problem 2
# Write a REPL which asks users for a list of numbers, which they enter, until they say 'done'. Then print out the list.
def get_numbers():
    num_list = []

    while True:
        user_input = input("Enter a List of numbers or type 'Done' to exit: ")
        if user_input == 'done':
            print(f'{num_list}')
            exit()
        else:
            num_list.append(int(user_input))
            continue
# get_numbers()

# Problem 3
# Write a function that takes a list of numbers, and returns True if there is an even number of even numbers.
def eveneven(num_list):
    even_list = []
    odd_list = []

    for num in num_list:
        if num % 2 == 0:
            even_list.append(num)
        else:
            odd_list.append(num)
        
    return len(even_list) > len(odd_list)

# print(eveneven([5, 6, 5])) # True
# eveneven([5, 5, 2]) # False

# Problem 4
# Print out every other element of a list, first using a while loop, then using a for loop.
def print_every_other(nums):
    i = 0
    while i <= len(nums):
        print(nums[:len(nums):2])
        i += 1

    for i in range(0,len(nums),2):
        print(nums[i])

# print_every_other([1, 1, 2, 3, 4, 5, 6, 7, 8]) # 0, 2, 4, 6, 8


# Problem 5
# Write a function that returns the reverse of a list.
def reverse(nums):
    nums.reverse()
    return nums
# print(reverse([1, 2, 3])) # 3, 2, 1


# Problem 6
# Write a function to move all the elements of a list with value less than 10 to a new list and return it.
def extract_less_than_ten(nums):
    nums_list = []
    
    for num in nums:
        if num < 10:
            nums_list.append(num)

    return nums_list

# print(extract_less_than_ten([2, 8, 12, 18])) # [2, 8]


# Problem 7
# Write a function to find all common elements between two lists.
def common_elements(nums1, nums2):
    for i in range(0,len(nums),1):
        if nums1[i] == nums2[i]:
            pass
  
# print(common_elements([1, 2, 3], [2, 3, 4])) # [2, 3]

# for i in range(len(coins))


coins = [
    ('quarters', 25),
    ('dimes', 10),
    ('nickels', 5),
    ('pennies', 1)
]
# quarters = amount / 25
# dimes = amount / 10
coin_counts = []
for coin in coins:
    print(coin)
    print(coin[1])
    # coin_count = amount // coin[1]  #floor division = 100 / 25 = 4
    # amount = amount - ( coin_count * coin[1] )
    # #amount -= coin_count * coin[1]
    # coin_counts.append(coin_count)