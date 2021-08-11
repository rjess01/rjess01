print("Hello from Python")

# single line comment 

"""
multi
line
comment
"""

# variables and variable types

name = "Jesse"
print(name)

age = 23
total = 4.20
found = True

print(age)
print(total)
print(found)
print(name + name) #string concatenation
print(age + 1) #sum
print(name + str(age))


if(age < 100):
    print("You are still young")
    print("Another line inside the if")
elif (age == 100):
    print("You are on the very edge :p")
else:
    print("Sorry, you are just old")
    

print("Line outside the If")

def test():
    print("Hello, I'm a test")


test() #call / execute an function
test()