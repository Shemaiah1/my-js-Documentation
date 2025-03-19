# Javascript Learning Documentation

## Introduction
This repository contains my JavaScript learning progress, covering various concepts from basics to advanced topics.

## 01. What javasript is
Javascript is one of the three core languages in frontend development.It adds behaviour and interactivity to your website and it is great for maipulating webpages.

### javascript as a scripting language.
Javascript is a scripting language meanining:

i. it is intentionally limited.
ii. it does not have the same feature as other programming language.
iii. it cannot communicate directly with the database or file system on a computer.

### javascript as a client side language

Javascript is a client side language meaning it runs on your browser it gets information from the server brings it to the browser on your computer and displays it to you in the form of a webpage( a combination of HTML, CSS and probably Javascript) and runs it on your computer not on the server.

#### Note: 
Javascript enhances audience experience but should not be relied on to add basic funtionalities to a website.

### where to put your javascript
The HTML page loads from top to buttom so if the javascript is embeded on top it reads before loading the rest of the page.so the best place to put it is at the end of the content before the closing body tag.

## 02. Basic syntax and structure of javascript

i. javascript is case sensitive 
ii. Semi colon is added at the end of every statement
iii. It is not sensitive to white space or line breaks
iv. For a one line comment two forward slashes are used  //
v. For multiple commentwe use /* */
vi. javascript runs from top to buttom

## 03. Variables
We use variables to store information, it is defined with the keyword var, then a varible name is given. It can be anything but must not start with a number, camocase can also be used, it should have a value and end with a semi-colon.the valve can be changed, the value type can also be changed to a number ,object or a string (true/false) etc.This is an example below:
`````
var num1 = 20 ;
var num2 = 10;
`````

## 04. Basic maths operators in javascript

Just as it is in maths,  the five most common operators are
i. Assingnment operator (=)
ii. Addition operator (+)
iii. Subtraction operator (-)
iv. Multiplication operator (*)
v. Division operator (/)
A math operator can't work with two different value types. 
```
e.g 5 + "5" it can't work because it is a number and a string.
```
## 05. shorthand maths operators
## 06.writting to the document and console
if you want to write to the document you  use document.wrrte but if you are writing to the console use console.log.
````
document.write("This is written to the document")
 console.log("This is written to the console")
````
## 07. Boolean 

A boolean is a value that represents either true or false, we can use it to evaluate certaain circumstances.
example
````
var iLikeMeat = true; the true is a boolean
```` 
However a boolean can also be used to check the truth or false of certain values by using the boolean keyword andputing the value in parenthesis.if an emptyy string is evaluated,0 or -0 it will return false. 

Using boolean to evaluate values
```
Boolean (7<5) result=false
Boolean (0) result= false
Boolean (7==7) result=false  
```
## 08. If statements

control flow and statement are part of everyday life and so it is in web development, if you do something you get a certain result. It is a common logic where the if statement is used to check wheather certain conditions are met or not and for each condition it executes a different portion of code. We start by using the keyword if,then the parenthesis containing the value to be evaluated,then the brackets where the code to be executed will be written.
```
if( condition to be met){
    code to be executed
}
```
## 0.9 else if

this does the same work as the if statement, but this enables the user to give multiple options if one condition is not met the elseif comes to play.
````
var myAge=20;
 if (myAge> 30){
    console.log("over 30")
 }
 else if(myAge<30){
    console.log("not over 30") //enable multiple options if certain conditions are met
 }
 ````
## 10. Comparison operators
the comarison operators are used to compare two or more numbers they include
```
<=  less than or equal to
>=  greater than or equal to
== double equal to comparison operator: this checks out for the value alone 
=== triple equal to comparison operator: this checks out for the value and type
!= not equal to comparison operator
```

## 11. Logical Operators
The logical operators are used to check if multiple option are true or false,then execute a portion of the code we have the AND (&&) and OR (||) are logical operators . Example
```
var logic= 30;
  if (logic >=18 &&  logic <=30)//The And logical opertor(&&) is enabling two option
   {
   console.log("accepted")
  }
  if(logic <=5 || logic <18 )// The Or logical operator(||) is enabling two options
   {
   console.log("Hold on for now we will get to you")
  }
```
## 12. While Loops
 The while loops is another control flow system just like the if statement. it uses the keyword While with a parenthesis where the conditions will be written and calliberaces where the code to be executed will be written, so if the conditon is true the code will be executed. A loop is ment to repeat part of a code so while the condition is true it will always keep executing that portion of code, so at some point the condition has to be false to stop the code execution.
 ```
while (logic > 30)//The code is executed as long as this condition remains the same
   {
   console.log("you are not accepted")
  }
 ```
 ## 13. For loop
  The for loop works similar to the while loop but is more specific in that all the component ( the variable, the component and the break) within the brackets.
  ```
  /For loop
  for(floop = 0; floop < 10; floop++)
  {
   console.log( "for loop")
   }
  ```

  ## 14. Break and continue
  the break keyword break you out of the loop at any point while the continue keyword while the continue keyword stops the execution of the code at any point but goes out to continue the rest part of the code.
  ```
  while (logic > 30)//The code is executed as long as this condition remains the same
   {
   console.log("you are not accepted");
   logic++
      if(logic === 50)
         { break;}//the break keyword
  }
  
  //For loop
  for(floop = 0; floop < 10; floop++){
   console.log( "for loop")

   if(floop === 20)
      { continue;}//the break keyword
  }
  ```
  ## 15. Functions
   Function groups logical section of code together so they can be called at any time and anywhere. We specify by writting the keyword Function then the name of the function(the naming rules are similar to the varible naming rules) then write the parenthesis ,the parenthesis can be empty but if we put variable or value we have to specify it.

## 16. variable scope
variable scope determines where the code and the variable isvisible and which part of the code can use it.

### Types of scope
1.Global variable: global variable has a global scope, it can be used anywhere in the code.
2.Local variable:  local variable are variable defined inside a function, and so it can only be used within the function.
# JavaScript Basics - README

This documentation covers basic JavaScript concepts: **Numbers, Strings, Slice, and Split**.

## 17. Numbers in JavaScript
JavaScript handles all numbers as the **Number** type, whether integers or decimals.

### Example:
```
let num = 10;
let decimal = 5.5;
console.log(typeof num); // "number"
console.log(typeof decimal); // "number"
```
---

## 18. Strings in JavaScript
A **string** is a sequence of characters, enclosed in quotes (`'`, `"`, or `` ` ``). if you try to put a string betweeen or inside a string it will not work  so we can combat this by using the single quotation mark to surround the whole string, we can also escape a character by using a back slash(/) before the string. strings has properties and method.
e.g
1. properties: length
2. method: touppercase, tolowercase. indexof

### Example:
```
let text = "Hello, World!";
console.log(text.length); // 13 (length of the string)
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.includes("Hello")); // true (checks if "Hello" exists)
```
by cutting
## 19. spliting and slicing strings
we slice strings by cutting and removing part of the string with the function of slice put in the position of the start part of the  string we want to slice and it will slice, also if there is a string with different words which we want to be define in seperate strings we use the split function.

## 20. Arrays
An array is a single variable that can hold multiple value or other variables. when creating arrays we use the square brackets []. values can also be updated, arrays also have properties like length and methods like sort,reverse etc.

## 21. Object
 Javascript uses object which are also used in other programming languages, but in javascript we use a simplified version of it e.g strings, numbers, arrays and more. so object is a container which encloses data and behaviour together where they belong. We can call  properties and methods on the object

## 22. Creating a new javascript object