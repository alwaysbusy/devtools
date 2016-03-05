---
layout: tool
title: Python
type: Language
languages: python
platforms: Windows, OS X, Linux, Unix
description: Object-oriented language interpreted or compiled
homepage: http://www.python.org/
company: Python Software Foundation
price: Free
---

Python is one of the most commonly used languages and is easy to learn.  Code can be either run compiled or interpreted.

## Versions
There are currently two main versions of Python, Python 2 and Python 3.  There are large differences between the languages which means more complex code cannot be moved between the two versions.  Currently, Python 2 is the most widely used variant of Python and is used in all examples within this guide.

## Variables
Defining a variable in Python is very simple.  Python variables are loosely typed, and so can be very easily set without needing to declare a type.
```python
a = "string"
b = 0
c = False
d = None
```
Any variable can be output by using the keyword `print` followed by a variable name or an expression which evaluates to a variable.  `None` is the equivalent of a null value.

### Numbers
There are a series of common numeric operators available.  Operators follow the standard operator precedence rules (eg. 5 * 3 + 2 = 17).
```python
5 + 5 # Addition (10)
6 - 2 # Subtraction (4)
2 * 3 # Multiplication (6)
6 / 2 # Division (3)
5 * (3 + 2) # Parentheses (25)
17 // 3.0 # Floored division (5)
17 % 3 # Mod operation (2)
5 ** 3 # Power (125)
```

### Strings
Strings can be defined within either single or double quotes.  The standard escape character is `\`.
```python
'string'
"string"
'haven\'t'
"haven't"
'"Quote"'
"\"Quote\""
```

### Booleans
`True` and `False` are the two boolean values available in Python.

### Arrays
Arrays are expressed as a comma separated list within square brackets.  A string is handled as a character array, so all array functions apply to it.
```python
word = "Abbreviate"
word[0] # A
word[4] # e
word[-1] # e
word[-2] # t
word[:3] # Abb
word[3:] # reviate
word[-2:] # te
word[3:5] # re
```

## Functions and Classes
Functions and classes are defined using either the `def` or `class` keywords.  When laying out functions and classes, it is important to leave the correct amount of whitespace at line beginnings (usually 1 tab per level) as this is used to signify to which class or function code belongs.
```python
def a_simple_function():
    print "A Simple Function"
    print "This is the functions end"
    
def a_compled_function(input1, input2):
    if input1 > input2:
        return input1
    elif input2 > input1:
        return input2
    else
        return None
```

In Python, all functions within a class must have a parameter of self as the first parameter.  There are also several function names which are reserved for use in classes to perform certain necessary functionality.
```python
class MyClass:
    def __init__(self): # The __init__ function runs when the class is created
        self._number = 0 # Underscores are used to represent private variables
    
    def set_number(self, number):
        self._number = number
    
    def __repr__(self): # The __repr__ function is used when a representation of the class is needed, such as in a print statement
        return self._number
```

## Other functions
Python supports most common language features, such as selection, repetition and recursion.
```python
# A sample if statement
if a is b:
    print a
elif a is not c:
    print c
elif b is c and a is c:
    print b
else:
    print "Error"
```

An `import` statement can also be used within code to import functionality from either other local files or a library that has been centrally installed.

## Further reading
A good simple tutorial for Python is available at [Python docs](https://docs.python.org/2/tutorial/introduction.html).