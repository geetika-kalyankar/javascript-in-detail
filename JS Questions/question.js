// JavaScript Questions:-

// 01. Create a variable.js file and declare variables and assign string, Boolean, undefined and null data types, Display all the value with their data type.

// const dataTypes = () =>{
//     let str = "Hello!"
//     let bool = true
//     let undef = undefined
//     let empty = null 
//     if(empty === null){
//         console.log('null');
//     }
//     console.log(typeof(str));
//     console.log(typeof(undef));
//     console.log(typeof(bool));
// }
// dataTypes()


// 02. Declare variables to store your first name, last name, marital status, country and age and display them using interpolation method.
// const bioData = function(){
//     let firstName = "Geetika", 
//     lastName = "Kalyankar",
//     martialStatus = "Unmarried",
//     country = "India",
//     age = 21
//     console.log(`My name is ${firstName} ${lastName}. I am ${age} years old, ${martialStatus}, and I live in ${country}.`); 
// }
// bioData()

// 03. Declare a variable and assign string value to it and change all the string characters to capital letters using toUpperCase() method.
// const uppercase = function (){
//     let collection = "The best way to predict the future is to create it."
//     console.log(collection.toUpperCase());
// }
// uppercase()

// 04. Declare a variable and assign string value to it and check if the string contains a word Script using includes() method.
// const includesMethod = function(){
//     let Str = "The life is scripted by the GOD!"
//     console.log(Str.includes("script"));
// }
// includesMethod()


// 05. Declare a variable and assign string value to it and then split it into an array using split() method
// const splitMethod = function(){
//     let str = "realization"
//     let arr = []
//     console.log(str.split(arr))
// }
// splitMethod()


// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// const split = function(){
//     let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
//     let arr = str.split(", ")
//     console.log(arr);
// }
// split()


// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "vitthal korvan".
// let str = "korvan"
// let arr = []
// for(string of str){
//     arr.push(string)
// }
// console.log(arr[arr.length -1]);
// console.log(arr[0]);
// console.log(arr.lastIndexOf());

// 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.
// const trim = function(){
//     let str = "   Have a good day   "
//     console.log(str.trim())
// }
// trim()


// 09. Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.
// const truthy = function(){
//     let str = "I am girl"
//     if(str) console.log(`${str} is truthy`);

//     let arr = [1,2,3]
//     if (arr) console.log(`${arr} is truthy`);

//     let  num = 23
//     if (num) console.log(`${num} is truthy`);
// }
// truthy()


// - Write three JavaScript statement example which provide falsy value.
// const falsy = () =>{
//     let a = null
//     if(a) "This will not print"
//     else console.log(`${a} is falsy`)

//     let b = undefined
//     if(b) console.log("This will not print");
//     else console.log(`${b} is falsy`)

//     let  num = 0
//     if(num) console.log("This will not print");
//     else console.log(`${num} is falsy`)
// }
// falsy()


// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// const comparsion = () =>{
//     console.log(- 4 > 3);

//     console.log(- 4 >= 3); 
    
//     console.log(- 4 < 3);
    
//     console.log(- 4 <= 3);
    
//     console.log(- 4 == 4);
    
//     console.log(- 4 === 4);
    
//     console.log(- 4 != 4);
    
//     console.log(- 4 !== 4);
    
//     console.log(- 4 != '4');
    
//     console.log(- 4 == '4');
    
//     console.log(- 4 === '4');

// }
// comparsion()


// - Find the length of python and jargon and make a falsy comparison statement.

// 11. Use the Date object to do the following activities
// let date = new Date()
// - What is the year today?
// console.log(date.getFullYear())

// - What is the month today as a number?
// console.log(date.getMonth());

// - What is the date today?
// console.log(date.getDate())

// - What is the day today as a number?
// console.log(date.getDay())

// - What is the hours now?
// console.log(date.getHours())

// - What is the minutes now?
// console.log(date.getMinutes())

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let seconds = date.getSeconds("january 1, 1970")
// console.log(seconds);


// 12. Create a human readable time format using the Date time object
// let dateTime = function(){
// let date = new Date()
// let year = date.getFullYear()
// let month = date.getMonth() + 1
// let day = date.getDate()
// let hours = date.getHours()
// let min = date.getMinutes()

// - YYYY-MM-DD HH: mm
// console.log(`${year}-${month}-${day} ${hours}: ${min}`);

// - DD-MM-YYYY HH: mm
// console.log(`${day}-${month}-${year} ${hours}: ${min}`);

// - DD/MM/YYYY HH: mm
// console.log(`${day}/${month}/${year} ${hours}: ${min}`);

// }
// dateTime()


// 13. Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const ageCheck = function(){
//     let num = Number(prompt("Enter the number: "))
//     if(num>=18) return `You are old enough to drive`
//     else return `Wait to turn 18`
// }
// let message = ageCheck()
// console.log(message);


// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
// const evenOdd = function(num){
//     if(num%2==0) return `${num} is even number`
//     else return `${num} is not an even number`
// }
// let message = evenOdd(10)
// console.log(message);


// 15. Write a program which can give grades to students according to theirs scores:
// const checkGrade = function(score){
//     if(score>=80 && score<=100) return `A`           // - 80-100, A
//     else if(score>=70 && score<=79) return `B`       // - 70-79, B 
//     else if(score>=60 && score<=69) return `C`       // - 60-69, C
//     else if(score>=50 && score<=59) return `D`       // - 50-59, D
//     else return `F`                                  // - 0-49, F
// }
// let message = checkGrade(49)
// console.log(message);


// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// const season = function(month){
//     // - September, October or November, the season is Autumn.
//     if(month==="September" || month==="October" || month==="November"){
//         return "The season is Autumn"
//     }
//     // - December, January or February, the season is Winter.
//     else if (month==="December" || month==="January" || month==="February"){
//         return "The season is Winter"
//     }
//     // - March, April or May, the season is Spring
//     else if(month === "March" || month==="April" || month==="May"){
//         return "The season is Spring"
//     }
//     // - June, July or August, the season is Summer
//     else if(month === "June" || month==="July" || month==="August"){
//         return "The season is Summer"
//     }
//     else{
//         return "Please enter the appropiate month"
//     }

// }
// let message = season("June")
// console.log(message);


// 17. Write a program which tells the number of days in a month.
// const dayInMonth = function(year, month){
//     return  new Date(year, month + 1, 0).getDate()
// }
// console.log(dayInMonth(2024, 2))

// 18. Write a program which tells the number of days in a month, now consider leap year.
// const dayInMonth = function(year, month){
//     return  new Date(year, month + 1, 0).getDate()
// }
// console.log(dayInMonth(2024, 1))


// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// const country = require('./countries.js');
// const web = require('./web_techs.js');
// console.log("contries");
// console.log(country);
// console.log("Websites");
// console.log(web);

// 20. In the following shopping cart add, remove, edit items

// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

// - add Sugar at the end of your shopping cart if it has not been already added

// - remove 'Honey'

// - modify Tea to 'Green Tea'
// const cart = function(){
//     let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     shoppingCart.unshift(("Meat"))
//     shoppingCart.push("sugar")
//     shoppingCart = shoppingCart.filter(item => item !== "Honey")
//     shoppingCart[3] = 'green tea'
//     console.log(shoppingCart);
// }
// cart()


// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// const countryList = function(){
//     let countries = ["India","Japan","Switzerland","Ireland","Scotland","Netherland","Canada","Italy","Spain","Greece", "Ethopia"]
//     let count = countries.filter(item => item === "Ethopia")
//     if(count.length>0){
//         console.log("ETHOPIA");
//     }
//     else{
//         countries.push("Ethopia")
//         console.log(countries);
//     }
   
// }
// countryList()


// 22. The following is an array of 10 students ages:

// const studentAge = function(){
//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,89]

    // - Sort the array and find the min and max age
    // let last = ages[ages.length -1]
    // console.log(ages);
    // console.log("Minimum number is",ages[1]);
    // console.log("Maximum number is",last);

    // - Find the median age(one middle item or two middle items divided by two)
//     let mid = Math.ceil(ages.length / 2)
//     let num
//     if(ages.length % 2 === 0){
//         num = ((ages[mid+1]) + ages[mid]) / 2
//         console.log(num);
//     }
//     else{
//         num = ages[mid] / 2
//         console.log(num);
//     }

// // - Find the average age(all items divided by number of items)
// let total = 0
// for(let i = 1;i<ages.length;i++){
//     total += ages[i]
// }
// let avg = Math.floor(total/ages.length)
// console.log("Sum is",total)
// console.log("Total length of the array is",ages.length);
// console.log("Average is",avg);


// - Find the range of the ages(max minus min)
// let arr = ages.sort()
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log("Maximum is",max);
// console.log("Minimum is",min);
// console.log("Minus is",max - min);

// - Compare the value of (min - average) and (max - average), use abs() method
// console.log("(min - average)",Math.abs(min - avg));
// console.log("(max - average)",Math.abs(max - avg));
// }
// studentAge()

// 23. Write a program to check that the number given by the user is a prime number or not.
// const primeNumber = function(){
//     let num = 151
//     if(num===0 || num===1) console.log("It is a prime Number");
//     if(num%2==0) console.log("It's not a prime number");
//     for(let i =2;i<=Math.sqrt(num);i++){
//         if(num%i===0) console.log("It's not a prime number");
//     }
//     console.log("It's a prime number");
// }
// primeNumber()


// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
// const evenOdd = function(){
//     let even = []
//     let odd = []
//     for(let i = 1;i<=100;i++){
//         if(i%2==0){
//             even.push(i)
//         }
//         else{
//             odd.push(i)
//         }
//     }
//     console.log(even);
//     console.log(odd);
// }
// evenOdd()



// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older. 
// Check if a person is underweight, normal, overweight or obese based the information given below.

// - The same groups apply to both men and women.

// - Underweight: BMI is less than 18.5

// - Normal weight: BMI is 18.5 to 24.9

// - Overweight: BMI is 25 to 29.9

// - Obese: BMI is 30 or more

// const calculateBMI = () =>{
//     let weight = Number(prompt("Enter weight in KG"))
//     let height = Number(prompt("Enter the height in meters"))
//     let age = Number(prompt("Enter your age"))
//     if(age>20){
//         let bmi = weight / Math.sqrt(height)
//         console.log(bmi);
//         if(bmi<18.5) console.log("Underweight");
//         else if(bmi>18.5 && bmi<24.5) console.log("Normal weight");
//         else if(bmi>25 && bmi<=30) console.log("overweight");
//         else console.log("Obese");
//     }
//     else console.log("Your underage");
   
// }
// calculateBMI()

// 26. Write a program to print the table of any number given by the user. The format of the output should be similar to the below example-

// If the number given by the user is 2 then the output should look like this-

// 2 * 1 = 2

// 2 * 2 = 4

// 2 * 3 = 6 and so on till 2 * 10 = 20.

// const twoTable = (num) =>{
//     let mul = 0
//     for(let i=1;i<=10;i++){
//         mul = num * i
//         console.log(`${num} * ${i} = ${mul}`);
//     }
// }
// twoTable(2)

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
// const primeCheck = () =>{
//     for(i=0;i<=100;i++){
//         if(i%)
//     }
// }
// primeCheck()

// 28. Write a program to print the given patterns using the loops-

// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

// *

// **

// ***

// const pattern = function(){
//     for(let i = 1;i<=5;i++){
//         let n = ""
//         for(j=1;j<=i;j++){
//             n += "*"
//         }
//         console.log(n);
//     }
// }
// pattern()

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output

// ***

// ***

// ***

// const pattern = function(){
//     for(let i = 1;i<=3;i++){
//         let n = ""
//         for(j=1;j<=3;j++){
//             n += "*"
//         }
//         console.log(n);
//     }
// }
// pattern()

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output

// *

// ***

// *****

// const pattern = function(){
//     for(let i = 1;i<=5;i+=2){
//         let n = ""
//         for(j=1;j<=i;j++){
//             n += "*"
//         }
//         console.log(n);
//     }
// }
// pattern()

// 29. Write a JavaScript program which takes the input of filename as string and prints the extension of the file in the console.


// const fileExtension = (filename) =>{
//     let indexDot = filename.indexOf('.')
//     let extension = filename.slice(indexDot + 1, filename[-1])
//     return `The extension of file (${filename}) is ${extension}`
// }
// let output = fileExtension("question.js")
// console.log(output);


// 30. Create a simple calculator program in JavaScript which can perform the addition, subtraction, multiplication and division on given numbers.
// function calculator(){
//     const add = function(a,b){
//         return a + b
//     }
//     const sub = function(a,b){
//         return a - b
//     }
//     const division = function(a,b){
//         return a / b
//     }
//     const multi = function(a,b){
//         return a * b
//     }
//     return {
//         add: add,
//         sub: sub,
//         division: division,
//         multi: multi
//     };
// }
// let cal = new calculator()
// let message = cal.sub(2,5)
// console.log(message);

// WAP to check wheather the given number is spy or not
// const spyNum = (number) => {
//     let rem = 0, mul = 1, add = 0
//     while(number>0){
//       rem = number % 10
//       mul *= rem
//       add += rem
//       number = Math.floor(number / 10)
//     }
//     if(add === mul)   console.log(`${add} is spy number`);
//     else console.log(`It's not a spy number`);
// }
// spyNum(132)