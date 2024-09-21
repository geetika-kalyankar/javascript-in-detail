// 1. Function should return a value 1 if number is Armstrong otherwise it returns 0 if not.
// const armstrong = function(num){
//     let temp = num, rem, count, mul = 0
//     count = Math.ceil(Math.log10(temp))
//     while(num>0){
//         rem = num % 10
//         mul += Math.pow(rem, count)
//         num = Math.floor(num/10)
//     }
//     if(mul==temp){ 
//         return "1";
//     }
//     else{
//         return "0";
//     }  
// }
// let message = armstrong(153)
// console.log(message)

// 2. Function should return fibonacci series. 
// const fib = (num) =>{
//     let num1 = 0, num2=1, fib=0
   
//     while(fib<=num){
//         console.log(fib);
//         num1 = num2
//         num2 = fib
//         fib = num1+num2
//     }
// }
// fib(5)

// 3. Write a MENU Driven program using separate function to calculate and return the answerof the following options from a given sentence:
// a) Total number of digits present in it.
// b) Total number of small letters and capital letters present in it.
// c) Total number of alphabets used in it.
// d) Total number of vowels presents in it.
// e) Total Number words present in that sentence.

// const cal = () =>{
//     let str = "Good1Morning"
//     let arr = str.split("")
//     let smallLetters = 0
//     let capitalLetters = 0
//     let digits = 0
//     let vowels = 0
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] >= "a" && arr[i] <= "z") smallLetters++
//         else if(arr[i] >= "A" && arr[i] <= "Z") capitalLetters++
//         else if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") vowels++
//         else if(arr[i] >= 1 && arr[i] <= 9) digits++
//     }
//     for(let i = 0;i<arr.length;i++){
//          if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") vowels++
//     }
//     console.log(`small letters ${smallLetters}`);
//     console.log(`capital letters ${capitalLetters}`);
//     console.log(`total words ${capitalLetters + smallLetters} `);
//     console.log(`vowels letters ${vowels}`);
//     console.log(`digits ${digits}`);
// }
// cal()


// 4. To find sum of first n natural numbers
// const natural = (num) =>{
//     let sum = 0, i = num
//     while(i>=0){
//         sum = sum + i
//         i--
//     }
//     return `sum of the nth natural number is ${sum}`
// }
// let output=natural(5)
// console.log(output);


// 5. To check whether given number is ADAM number or not
// const adam = (num) =>{
//     let rem1, rev1 = 0, sqrt2, rem2, rev2 = 0
//     let sqrt1 = Math.pow(num, 2)
//     console.log(`The square of the number is ${sqrt1}`)
//     while(num>0){
//         rem1 = num % 10
//         rev1 = rev1 * 10 + rem1
//         num = Math.floor(num / 10)
//     }
//     console.log(`The reveres of the ${rev1}`)
//     sqrt2 =  Math.pow(rev1, 2)
//     console.log(`square of the reverse number is ${sqrt2}`)
//     while(sqrt1>0){
//         rem2 = sqrt1 % 10
//         rev2 = rev2 * 10 + rem2
//         sqrt1 = Math.floor(sqrt1 / 10)
//     }
//     if(rev2==sqrt2){
//      return  "It's an adam number"
//     }
//     else{
//      return  "It's not an adam number"
//     }
// }
// let output = adam(13)
// console.log(output);

// 6. to find the product of middle digits of given number
// const product = (num) =>{
//     let rem, add = 0
//     num = Math.floor(num / 10)
//     while(num>9){
//         rem = num % 10
//         add = add + rem
//         num = Math.floor(num / 10)
//     }
//     return `Product of the number ${add}`
// }
// let output =  product(3456)
// console.log(output)


// 7. The present population of a country is PO, and it increases by 5% every year.
// The population (P) after n years is given by the formula:
// P= PO (1.05)n. Write a program to find the population every year for the next ten years
// const populationCount = function(number, year){
//     let i = 1, po = 0
//     console.log("year\tPopulation number");
//     while(i<=year){
//         let p = number * 0.05
//         po = number + p
//         number = po
//         console.log(`${i}\t${po.toFixed(2)}`);
//         i++  
//     }
// }
// populationCount(800, 10)

// 8. Generate the following series:
//Note: you can use any predefined methods of Math class.

// a) 1 2 4 7 11 16 22
// const series = () =>{
//     let num = 1
//     for(let i = 0;i<7;i++){
//         num = num + i
//         console.log(num);
//     }
// }
// series()

// b) 0 1 3 6 10 15 21
// let series = (num) =>{
//     let n = 0, i = 0
//     while(i<num){
//         console.log(n);
//         i++
//         n = n + i
//     }
// }
// series(7)

// c) 0 3 8 15 24 35
// const series = () => {
//     let i = 0;
//     let num = 0;
//     let n = 0;
//     let array = [2, 6, 8, 10, 12];
//     let index = 0;

//     while (i < 7 && index < array.length) {
//         console.log(i);
//         i += array[index];
//         index++;
//     }
// }

// series();

//  1 2 2 4 8 32
// const series = () =>{
//     let array = [ 1, 2, 2, 4, 8, 32]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()

//  2 3 4 6 6 9 8 12 10 15
// const series = () =>{
//     let array = [ 2, 3, 4, 6, 6, 9, 8, 12, 10, 15]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()


//  1 5 2 4 3 3 4 2 5 1
// const series = () =>{
//     let array = [1,5,2,4,3,4,2,5,1]
//     let i = 0
//     while(i<array.length){
//         console.log(array[i]);
//         i++
//     }
// }
// series()

//  0 7 26 63 124
// const series = (n) =>{
//     let  i = 0, num
//     while(i<=n){
//         num =Math.pow(i, 3) - 1
//         if(num>=0){
//             console.log(num);
//         }
//         i++
//     }
// }
// series(5)

//  S = (1+2) + (1+2+3) + (1+2+3+4) + ………… + (1+…………+15)

// let series = "", currentSum = 0;

// for (let i = 1; i <= 15; i++) {
//     currentSum += i;
//     series += "(1";
//     for (let j = 2; j <= i; j++) {
//         series += "+" + j;
//     }
//     series += ") ";
// }
// console.log(series);


//9. Write a program to display the factorial of the first ten natural numbers.

// const fact = (num) =>{
//     let i=1, n = 1
//     while(i<=num){
//         n = i
//         let fact = 1
//         while(n>0){
//             fact *= n
//             n--
//         }
//         console.log(`Factorial of ${i} is ${fact}`);
//         i++
//     }
// }
// fact(10)


// 10. Write a program to generate all Perfect numbers up to 1000.
// const findPerfectNumbers = () => {
//   let perfectNumbers = [];
//   let num = 1;

//   while (num <= 1000) {
//     let sum = 0;
//     let i = 1;
//     while (i <= num / 2) {
//       if (num % i === 0) {
//         sum += i;
//       }
//       i++;
//     }
//     if (sum === num && num !== 0) {
//       perfectNumbers.push(num);
//     }
//     num++;
//   }

//   return perfectNumbers;
// };

// const perfectNum = findPerfectNumbers();
// console.log("Perfect numbers up to 1000 are:", perfectNum);


// 11. Write a program to accept a number then print the sum  number of digits present in it.
// function Sum(num){
//     let rem=0, sum = 0
//     while(num>0){
//         rem = num % 10
//         sum += rem
//         num = Math.floor(num / 10)
//     }
//     return `Sum of the digits is ${sum}`
// }
// let output = Sum(1234)
// console.log(output)

// 12. Write a program to check whether all digits of the given number are same type or not (i.e. all are odd, all even numbers or both present)

// const Check = (num) => {
// let rem = 0, even = 1, odd =1, evcount = 0, oddcount = 0
// while(num>0){
//     rem = num % 10
//     if(rem%2==0){
//         even = even * 10 + rem
//         evcount++
//     }
//     else if(rem%2!=0){
//         odd = odd * 10 + rem
//         oddcount++
//     }
//     num = Math.floor(num / 10)
// }
//     console.log(`Odd count: ${oddcount}`);
//     console.log(`Even count: ${evcount}`);
//     if(evcount>=1 && oddcount>=1) return "It has both even and odd"
//     else if(evcount>1 && oddcount===0) return "It has only even numbers"
//     else return "It has only odd numbers "
// }
// let output = Check(1357)
// console.log(output);
// 13. Write a program to accept a number and then add all digits until you found a single digit number. If that single digit number is 1, then that number is called lucky number. (e.g. if number is 2345 then sum of its digits becomes 14, further sum of these digits is 5, so the number is not a lucky number)
// const single = (num) =>{
//     let rem = 0, sum = 0
//     while(num>0 || sum>9){
//         if(num===0){
//             num = sum
//             sum = 0
//         }
//         rem = num % 10
//         sum = sum + rem
//         num = Math.floor(num / 10)
//     }
//     if(sum===1) return `${sum} is lucky number`
//     else return `${sum} is not a lucky number`
// }
// let output = single(90)
// console.log(output);

// 14. Write a program to accept any 10 numbers. Then count how many numbers are odd, even or zero among them.
// const countNumbers = () =>{
//     let i = 1, evenCount = 0, oddCount = 0, zeroCount = 0, num
//     while(i<=10){
//         num = Number(prompt("Enter a number"))
//         if(num===0){
//             zeroCount++
//         }
//         else if(num%2!=0){
//             oddCount++
//         }
//         else{
//             evenCount++
//         }
//         i++
//     }
//     console.log(`Even number counts are ${evenCount}`);
//     console.log(`Odd number counts are ${oddCount}`);
//     console.log(`Zero number counts are ${zeroCount}`);
// }
// countNumbers()

// 15. Write a program to accept any 10 numbers. Then count how many numbers are positive, negative or zero among them
// const countNumbers = () =>{
//     let i = 1, posCount = 0, negCount = 0, zeroCount = 0, num
//     while(i<=5){
//         num = Number(prompt("Enter a number"))
//         if(num>0){
//             posCount++
//         }
//         else if(num<0){
//             negCount++
//         }
//         else{
//             zeroCount++
//         }
//         i++
//     }
//     console.log(`Positive number counts are ${posCount}`);
//     console.log(`Negative number counts are ${negCount}`);
//     console.log(`Zero number counts are ${zeroCount}`);
// }
// countNumbers()

// 16. Write a program to accept any number between 1 - 10, and then display the number in word.
// const numWords = (num) =>{
//     if(num>=1 && num<=10){
//         switch(num){
//             case 1:
//                 console.log("one");
//                 break
//             case 2:
//                 console.log("two");
//                 break
//             case 3:
//                 console.log("Three");
//                 break
//             case 4:
//                 console.log("Four");
//                 break
//             case 5:
//                 console.log("Five");
//                 break
//             case 6:
//                 console.log("Six");
//                 break
//             case 7:
//                 console.log("Seven");
//                 break
//             case 8:
//                 console.log("Eight");
//                 break
//             case 9:
//                 console.log("Nine");
//                 break
//             case 10:
//                 console.log("Ten");
//                 break
//         }
//     }
//     else console.log("Enter between 1 to 10");
// }
// numWords(1)

// 17. Write a program to accept 10 numbers. 
// Display the second highest number among them.

// const secHighest = () =>{
//     let num, i =1, array = []
//     while(i<=10){
//         num = Number(prompt("Enter the number"))
//         array.push(num)
//         i++
//     }
//     array.sort((a, b) => b - a);
//     console.log(array[1]);
// }
// secHighest()

// 18. Write a program to accept 10 numbers and count how many numbers are divisible by 2 & 3 among them.
// const divisible = () =>{
//     let i = 1, num = 0, count = 0
//     while(i<=10){
//         num = Number(prompt(`Enter the ${i} number`))
//         if(num%2==0 && num%3==0){
//             console.log(`This numbers are divisible: ${num}`);
//             count++
//         }
//         i++
//     }
//     console.log(`Total ${count} are divisible by 2 and 3`);
// }
// divisible()

// 19. Write a  function primeCheck(int num) to check whether a given number is Prime or not. 
// Function should return a value 1 if number is prime otherwise it return 0 if not.
// function primeCheck(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return 0
//     }
//     return 1
// }
// let output = primeCheck(151)
// console.log(output);


// 20.  the function accepts a number and finds whether it is even and divisible by 8 or not. 
// It returns '1' if condition is satisfied otherwise '0'. 
// const divisible = (num) =>{
//     if(num%8==0 && num%2==0){
//         return 1
//     }
//     else{
//         return 0
//     }
// }
// let output = divisible(63)
// console.log(output);


// 21. define a method f1() to calculate and print hcf (highest common factor) by division method of any two given numbers entered by user. 
// Define another method f2() to calculate and print the area and perimeter of a rectangle by using the required parameters accepted. 
// Define main class to input the parameters required in the above two methods and also call the two functions.

// const f1 = (a, b) => {
//     let num = 1
//     // By modules way 
//     while(b!==0){
//         // num = a % b
//         // a = b
//         // b = num
//         num = Math.floor(a / b)
//         let sub = num * Math.min(a, b)
//         let num2 = Math.max(a, b) - sub
//         a = b
//         b = num2
//     }
//     console.log(`highest common factor of ${a} and ${b} is`,a);     
// }
// const f2 = (lenght, width) => {
//     let area, perimeter
//     area = lenght * width
//     console.log("Area of rectangle",area);
//     perimeter = 2 * (lenght + width)
//     console.log("Area of Perimeter",perimeter);
// }
// function main() {
//     f1(48, 18)
//     f2(54, 23)
    
// }
// main()


// 22. Write a program to print the few lines of the following patter (number of lines is given by user). Use
// one function for printing alphabets and another function to print the number.
//   A A A A A 1
//   B B B B 1 2
//   C C C 1 2 3
//   D D 1 2 3 4
//   E 1 2 3 4 5

// const pattern = () => {
//     let alphabet = ['A', 'B', 'C', 'D', 'E'];
//     let array = [1, 2, 3, 4, 5];
    
//     for (let i = 0; i < 5; i++) {
//         let line = "";
//         for (let j = 0; j < 5 - i; j++) {
//             line += alphabet[i] + " "
//         }
//         for (let k = 0; k <= i; k++) {
//             line += array[k] + " ";
//         }
//         console.log(line);
//     }
// };

// pattern();



// 23. The number 151 is a prime palindrome, because it is both a prime number and a palindrome.
//  Write a class that find all prime palindromes between two given numbers a and b. 
// Accept the values for a and b from the user in function main().
// function isPrime(num) {
//     if (num === 1 && num === 2 && num === 0) "Its a prime number"
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return 0
//     }
//     return 1
// }
// const ispallindrome = (num) =>{
// let newNum = num, rem, mul = 0
// while(num>0){
//     rem = num % 10
//     mul = mul * 10 + rem
//     num = Math.floor(num /10)
// }
// if(mul===newNum) return 1
// else return 0
// }

// const main = (a, b) =>{
//     let i = a
//     while(i<=b){
//         if(isPrime(i) && ispallindrome(i)){
//             console.log("The numbers are ",i);
//         }
//         i++
//     }
// }
// main(2, 19)

//  24. Write a program to print all elements of Fibonacci series (between 1 to 1000),which is also a prime number using a defined function.
// function isPrime(num) {
//     if (num === 1 && num === 2 && num === 0) "Its a prime number"
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return 0
//     }
//     return 1
// }
// const primeFib = () =>{
//     let num = 1000, fib = 0, num1 = 0, num2 = 1
//     while(fib<num){
//         if(isPrime(fib)){
//             console.log(fib);
//         }
//         num1 = num2
//         num2 = fib
//         fib = num1 + num2
//     }
// }
// primeFib()