// variable
var num1 = 30 ;
var num2 = 50;

// Basic maths operators in javascript

//Assingment operator
var myName ="Shemaiah";
console.log(myName)

//Addition
var sum = num1 + num2;
console.log("The sum is", sum)
console.log(`the sum of ${num1} and ${num2} is ${sum}.`)

//Subtraction
var difference = num1 - num2;
console.log( `the difference between ${num1} and ${num2} is ${difference}.`)

//multiplication
var product = num1 * num2;
console.log(`the product of ${num1} and ${num2} is ${product}.`)

//Division
var division = num1 / num2;
console.log(`the quotient of ${num1} and ${num2} is ${division}.`)

//Shorthand maths operator
let a=10;
let b=5;

//Addition (+=)
a+=b//this means a = a+b
console.log(a);

//subtraction
a-=b//this means a = a-b
console.log(a);

//multiplication
a*=b//this means a = a*b
console.log(a);

//division
a/=b //this means a = a/b
console.log(a);

//writting to the document and console
 console.log("This is written to the console")// to the console

//Booleans
 var iLikeMeat = true; 
 
 // using boolean to evaluate values 
 Boolean (7<5) 
 Boolean (0)

 // if statements
 if(7>5){
    console.log ( "this is an if statement" )
 }

 //else if

 var myAge=30;
 if (myAge> 30){
    console.log("over 30")
 }
 else if(myAge<30){
    console.log("not over 30") //enable multiple options if certain conditions are met
 }
 else{
   console.log("you are good to go") //enable multiple options if certain conditions are met
}
 
 //Comparison operators
 var x=5;
 if(x>=3) {
   console.log( " this is a comparison operator working")
 }// this is giving it a two way option at the same time if x is greater than or if it is equal to 3 the portion of code available will come to play 
 
 //Logical Operator
  var logic = 40;
  if (logic >=18 &&  logic <=30)//The And logical opertor(&&) is enabling two option
   {
   console.log("accepted")
  }
  if(logic <=5 || logic <18 )// The Or logical operator(||) is enabling two options
   {
   console.log("Hold on for now we will get to you")
  }
 // While loops

/*while (logic > 30)//The code is executed as long as this condition remains the same
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
  }*/
 
 //function
 function getAverage (a,b,c){//
   var average =(a+b+c)/2;// local variable
    console.log(average);
 }
 getAverage(10,20,30)//this is just as writing the alert function and giving it a value

 //Numbers
 let num = 10;
let decimal = 5.5;{
console.log(typeof num); // "number"
console.log(typeof decimal);} // "number"

//
let text = "Hello, World!";{
console.log(text.length); // 13 (length of the string)
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.includes("Hello"));} // true (checks if "Hello" exists)