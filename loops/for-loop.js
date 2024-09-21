// For Loop: 
// syntax:
// for(initialization; condition; incre/decre operation){
//      logic - block of statements
//} 

// take a number from the user and show it's table

// let num = Number(prompt('enter a number'))
// let i, table
// for(i=1;i<=10;i++){
//    table = i * num 
//    console.log(table);
// }
// for(let i =1; i<=10; i++){
//     console.log(i);
// }

// WAP sum = 1*2 + 2*3 + 3*4.......9*10
// let num = Number(prompt("Enter the Number: "))
// let i, sum = 0
// for(i=1;i<num;i++){
//     sum += i*(i+1)
//     console.log(sum,i +"*"+(i+1))
// }


// WAP sum = 1*2 + 3*4 + 5*6 + ......... 11*12

// let num = Number(prompt("Enter the nth number: "))
// let i, sum = 0
// for(i=1;i<=num;i+=2){
//     sum = sum + i * (i+1)
//     console.log(sum, i + "*" +(i+1))
// }
// console.log(sum);

// WAP sum = 1*3 + 2*4 + 3*5..... +9*11
// let num = Number(prompt("Enter the nth value: "))
// let i, sum=0
// for(i=1;i<num;i++){
//     sum = sum + i*(i+2)
//     console.log(sum, i+"*"+(i+2))
// }

// WAP sum = 1-2 + 3-4 + 5-6..... +9-10 
// let num = Number(prompt("Enter the nth number: "))
// let i, sum =0
// for(i=1;i<=num;i+=2){
//     sum = sum + i-(i+1)
//     console.log(sum, i+"-"+(i+1))
// }
// console.log(sum)

// WAP to find factors of the given number

// let num = 6
// let i, sum =0
// for(i=1;i<=10;i++){
//    if(num%i==0){
//     let fact = i;
//     console.log("Factors are: ",fact)
//    }
// }

// WAP to find perfect number
// let num = 28
// let i, sum =0
// for(i=1;i<num;i++){
//    if(num%i==0){
//     sum = sum + i
//     console.log(sum)
//     }
// }
// if(sum===num){
//     console.log("its a perfect number")
// }
// else{
//     console.log("its not a perfect number")
// }

// WAP which reads a set of numbers till we enter 0 and calculate the avg

// let sum = 0, i, count = 0, avg
// let num
// for(i=1;true;i++){
//     num = Number(prompt("Enter the number: "))
//     if(num>0){
//     sum += num
//     console.log("The sum is: ",sum)
//     count++
//     }
//     else{
//         break;
//     }
// }
// console.log("Number of count: ",count)
// if(count!=0){
//     avg = sum / count
//     console.log("The average is: ",avg)
// }
// else{
//     console.log("no number is entered")
// }



// WAP palindrome Number or not
// 121 -> 121

// let num = Number(prompt('enter the number'))
// let rem, mul = 0, newNum = num
// for(;num>0;){
//     rem = num % 10 // 1
//     mul = mul * 10 + rem
//     num = Math.floor(num / 10)
// }
// console.log(mul)
// if(mul===newNum){
//     console.log("Number is palindrome")
// }
// else{
//     console.log("It's not a palindrome")
// }

// WAP Armstrong Number or not

// let num = 9474
// let rem, mul = 0, newNum= num, count = 0, temp=num
// for(;newNum>0;){
//     newNum = Math.floor(newNum / 10)
//     console.log(newNum)
//     count++
// }
// console.log(count)
// for(;num>0;){
//     rem = num % 10 // 1
//     mul = mul + Math.pow(rem, count)
//     num = Math.floor(num / 10)
// }
// console.log(mul)
// if(mul===temp){
//     console.log("Number is Armstrong")
// }
// else{
//     console.log("Number is not a n armstrong")
// }

// WAP to check whether the given number is strong num or not

// let num = 145
// let temp = num, sum = 0
// for(;temp>0;){
//     rem = temp % 10
//     let mul = 1 
//     for(let i=rem;i>0;i--){
//         mul *= i
//     }
//     sum += mul
//     temp = Math.floor(Math.abs(temp/10))
// }
// console.log((sum===num)?`strong `:`not a strong`);