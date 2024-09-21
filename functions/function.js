//Method->Object
// let person = {
//   fname: "Vitthal",
//   lname: "korvan",
//   age: 99,
//   mobile: 653112111,
//   email: "vck@gmail.com",
//   f: function details() {
//     console.log("function is called!");
//   },
// };

// console.log(person.f());
//Method -> A method is a function that is associated with an object or a class. 
//Methods are called using the dot notation on an object.

//Function -> A function is a reusable block of code that performs a specific task. 
//It takes input(s), processes them, and optionally returns an output. Functions are 
//standalone entities and are called directly by their name.

/* -------- function Defination ---------  */

//Syntax:
//Defining a function
// function function_name(parameters-> not mendentory){
      //block of code
//}

//calling a function
//function_name(Arguments -> if not passed Undefined Prints)

// function fullname(fname, lname){
//       console.log(`The firstname is ${fname} and lastname is ${lname}`);
// }

// fullname("vitthal");


// function Geetika(name){
//       console.log(`My name is ${name}`);
// }

// Geetika('Shweta');

//Function Argument vs Parameter

//Paramter -> Function parameters are the names listed in the function's definition. 

//Function arguments -> are the real values passed to the function. Parameters are 
//initialized to the values of the arguments supplied.

// function people(name1='a', name2='v', name3='Vitthal'){
//       return `${name1} ${name2} ${name3}`
// }

// let output = people('shweta',2,80)
// console.log(output);


//hoisting : 
// hoisting is a JavaScript mechanism where variables and function declarations 
//are moved to the top of their scope before code execution.
// hoisting is only allowed for function declarations.

// helloWorld();
// function helloWorld(){
//       console.log('Hello World');
// }

// helloWorld('geetika')

// const helloWorld = (name)=>{
//     console.log('Hello World ' + name);
// } 


// console.log(fname);
// var fname = 'vitthal'

/* -------- function Expression ---------  */

// const name = function fullname(fname, lname){
//       console.log(`The firstname is ${fname} and lastname is ${lname}`);
// }

// name("vitthal", "korvan");

/* -------- Arrow function  ---------  */

// const name = (fname = "a", lname = "v") => {
//   console.log(`The firstname is ${fname} and lastname is ${lname}`);
// };
// name("vitthal", "korvan");

// function addNumbers(num){
//     let rem 
//     let lastnum = num % 10
//     num = Math.floor(num / 10)
//     while(num>9){
//         rem = num % 10
//         num = Math.floor(num/10) 
//     }
//     console.log(num + lastnum)

// }
// addNumbers(10009)

// Function defination
// function factorial(num = 9){
//     let mul = 1, i = num
//     while(i>0){
//         mul = mul * i
//         i--
//     }
//     console.log(mul);
// }



// Function expression
// const exp = function(num = 56){
// let rem,rem2,revs = 0,revs2 = 0,sqrt2;
// let sqr = num * num;
// console.log("square of the number is: ", sqr);
// while (num > 0) {
//   rem = num % 10;
//   revs = revs * 10 + rem;
//   num = Math.floor(num / 10);
// }
// while (sqr > 0) {
//   rem2 = sqr % 10;
//   revs2 = revs2 * 10 + rem2;
//   sqr = Math.floor(sqr / 10);
// }
// console.log("reverse of the number is: ", revs);
// console.log("reverse of the square of the number is:", revs2);
// sqrt2 = revs * revs;
// console.log(sqrt2);
// if (sqrt2 === revs2) {
//   console.log("its an adam number ");
// } else {
//   console.log("its not an adam number");
// }
// }


// function arrow
// const arrow = (num = 370) =>{
// let newNum = num, rem, mul = 0
// count = Math.ceil(Math.log10(num)) 
// while(num>0){
// rem = num % 10
// mul += Math.pow(rem, count)
// num = Math.floor(num/10)
// }
// if(newNum===mul){
//     console.log("It's an armstrong number")
// }
// else{
//     console.log("It's not an armstrong number")
// }
// }

// factorial(22)
// exp(13)
// arrow(153)

/* ----------- Lexical Scope ------------ */

// function a(){
//     const myname = 'Geetika'
//     const b= function(){
//         return myname;
//     }

//     const c = ()=>{
//         const myname = 'shweta'
//         return myname;
//     }
//     console.log(c());
//     console.log(myname);
//     console.log(b());
// }
// a()


// const fname = 'abd'
// function sj(){
//     console.log(fname);
// }
// sj()


// function a(){
//     const b=function(){
//         const lname = 'jksdf'
//     }
//     const c=()=>{
//         console.log(lname);
//     }
//     c()
// }
// a()

/*-------- Function Returning a Function --------*/
// function hello(){
//     function world(){
//         return 'Hello Geetika'
//     }
//     return world()
// }
// const abc = hello()
// console.log(abc);


/*--------- IIFE (Immediately Invoked Function Expression) ----------*/

// (function () {
//     console.log('Hello geeta');    
// })();

// (() => {
//     console.log('Hello shweta');    
// })();