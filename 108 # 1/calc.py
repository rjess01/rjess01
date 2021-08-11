"""
System: Simple calculator
Author: Jesse Ramos
Functionality:
    - Sum
    - Subtract
    - Multiply
    - Divide
"""

#imports
from os import error
from display import print_menu


# global vars
"""
division
if the user tries to divide by zero:
    show a picture of their "Mom"
    result to 0

"""



#functions


#plain instructions
opt = ""
while(opt != "X"):
    print_menu()
    opt = input("Choose an option: ") # 'opt' contians the value insterted
    if (opt == "X"):
        break
    try:
        # ask for num1 and num2
        num1 = float(input("Provide num1: "))
        num2 = float(input("Provide num2: "))    
    except:
            print("Invalid input, try again")
            continue

    if(opt == "1"):
        # ask for num1 and num2
        print(f"The result is: {num1 + num2}")

    elif(opt == "2"):
        print(f"The result is: {num1 - num2}")

    elif(opt == "3"):
        print(f"The result is: {num1 * num2}" )

    elif(opt == "4"):
        if(num2 == 0):
            print("Error: Picture of Your Mom")
        else:
            print(f"The result is: {num1 / num2}")

    input("Press Enter to continue...")

print("Good-Bye Simp!")

"""
elif(opt == "X"):
print(f" Close") 
"""