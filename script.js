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

if (logic >=18 && logic <=30) { //The And logical opertor(&&) is enabling two option
   console.log("accepted")
} else if (logic <=5 || logic <18 ) { // The Or logical operator(||) is enabling two options
   console.log("Hold on for now we will get to you")
} else if (logic !== 40){
   console.log()
}

 // While loops

while (logic > 30)//The code is executed as long as this condition remains the same
   {
   console.log("you are not accepted");
   logic++
      if(logic === 50)
         { break;}//the break keyword
  }
  
  //For loop
for (i = 0; i < 10; i++) {
   console.log("for loop")
}
 
 //function
function getAverage (a, b, c) {
   var average = (a + b + c)/3; // local variable
   console.log(average);
}
getAverage(10, 20, 30) //this is just as writing the alert function and giving it a value

 //Numbers
let num = 10;
let decimal = 5.5;
console.log(typeof num); // "number"
console.log(typeof decimal); // "number"

//string
let text = "Hello, World!";
console.log(text.length); // 13 (length of the string)
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.includes("Hello")); // true (checks if "Hello" exists)

//spliting and slicing strings

//spliting
var split ="1, 2, 3, 4, 5";
console.log("console today", split.split(", ")); //this will split each number into different strings at each point of the comma

//slicing
var str="welcome to the world of programming";//main text
console.log(str.slice(15));//this will slice out the rest and start from the 15th character

//Array
var array = [ 1, 2, 3, 4, 5 ];//values in the array
console.log(array);// loging all to the console
console.log(array[2]); //loging array at position 2 to the console
console.log(array.length,"values in this array");//tells the number of values in the array
console.log(array.reverse());

// Object 
var object="my object"// the object is being assinged
console.log(object.length)//calling a property of length on the object "object"
console.log(object.toUpperCase)// calling a method/function on the object

//creating a new object
 var myCar =new Object(); //this is an empty object just like creating an array

 myCar.driver="shemaiah"; // giving the object a property
 console.log (myCar.driver)

 var mycar2={};// shorthand notation for an object with the properties and methods inside

 //THIS keyword
 console.log(this)//the window owns this exerpt it is owned by a particular object (being inside the curly braces of that particular object

 //constructor functions

   var Car = function(maxSpeed, driver) {
      this.maxSpeed = maxSpeed;
      this.driver = driver;
  
      this.drive = function(speed, time) {
          console.log(speed * time); // distance = speed × time
      };
  
      this.logDriver = function() {
          console.log("Driver name is " + this.driver);
      };
  };
  
  // Creating new objects using the constructor
  var myCar = new Car(200, "Shemaiah");
  myCar.drive(60, 2);         // Output: 120
  myCar.logDriver();          // Output: Driver name is Shemaiah
  
 //this costructor function makes it easier for us to create new objects

 //the date object
 var myDate= new Date();
 console.log(myDate);

 // storing past or future dates 
 var myPastDate =new Date(2006, 1, 13 , 6, 20, 3  );  //storing a past date 
console.log(myPastDate);

var upcomingConvention=new Date (2007, 0, 13);// storing a future date
console.log(upcomingConvention);

// calling methods on the date object
console.log(myPastDate.getDate())
console.log(myPastDate.getFullYear())
console.log(myPastDate.getMonth())
console.log(myPastDate.getDay())
console.log(myPastDate.getHours())
console.log(myPastDate.getTime())// for comparing dates

// Transversing the DOM

var myName= document.getElementsByClassName("intro");//transversing
console.log(myName)

//changing page content
var titleChange=myName[0].innerHTML="<h3> I am a web developer </h3>";//using the innerHTML method to change the elements.

// Changing elements attribute
 var nav=document.getElementById("first");

 nav.getAttribute("class");//reading the element attribute
 console.log(nav);

 nav.setAttribute("class","part") //changing the element attribute
 console.log(nav)

 nav.setAttribute("alt","nav-link")//writing a new element attribute
 
// changing CSS styles
nav.setAttribute("style","background-color:red");// adding or changing styles
nav.style.backgroundColor="blue";//changing the style value: from red to blue

//Adding elements to the DOM
var list=document.createElement("li");// creating an element
var create=document.getElementById("first"). getElementsByTagName("ul")[0];
create.appendChild(list);//putting the element where it should be
list.innerHTML="Blog";

create.insertBefore(list, create.getElementsByTagName("li")[0]);//choosing a position for theadded element

//Removing elements from the DOM
var parent= document.getElementById("first").getElementsByTagName("ul")[0];//getting the parent element
var child=parent.getElementsByTagName("li")[4];//getting the child element
parent.removeChild(child);//removing the child

//Javascript event
var eventDisplay = document.getElementById("intro");//storing the element in a variable

eventDisplay.onclick=function(){
alert("How are you doing");
};//giving the stored variable acess to the event

eventDisplay.onmouseover=function(){
   alert("you just hovered ")
};

// the on-clickevent example

var content=getElementById("content");
var button=getElementById("button");

button.onclick = function(){

   if (content.className === "open"){
      //shrink the box
      content.className="";
      button.innerHTML="show More";
   }else{
      //expand the box
      content.className ="open";
      button.innerHTML="Show less";
   }
}