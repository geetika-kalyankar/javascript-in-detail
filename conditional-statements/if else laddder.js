// let year = prompt("Enter a year: ")
// if (year%4==0  && year%100!=0 || year%400==0){
//     console.log("Leap year!")
// }
// else{
//     console.log("Not a leap year")
// }
// WAP to check the temperature by given value
// let temp = prompt("Enter the temperature")
// if (temp < 0){
//     console.log("Extremly cold")
// }
// else if (temp < 16){
//     console.log("It is cold outside")
// }
// else if (temp <25){
//     console.log("Wheather is ok")
// }
// else  if (temp< 35){
//     console.log("lets go swimming")
// }
// else if (temp < 45){
//     console.log("Turn on AC")
// }
// else{
//     console.log("Too hot")
// }

//to calculate the electricity bill read the current and previous meter reading.
//the charges given as follows w.r.t slabs

//No. of. units consumed:                       rate
//      0-100                                   0.80

//      100-200                                 1.2

//      200-300                                 1.5

//      >300                                    1.8

/*
let num = prompt('enter the units used')

let sum;
if(num>0 && num<100){
    sum = num * 0.8
    console.log('the bill is ' + sum)
}
else if(num>=100 && num<200){
    sum = num * 1.2
    console.log('the bill is ' + sum)
}

else if(num>=200 && num<300){
    sum = num * 1.5
    console.log('the bill is ' + sum)
}
else{
    sum = num * 2
    console.log('the bill is ' + sum)
}

*/

// Q.3 to find the average marks of 6 subjects of the student and display the result as

//follows

//      Average                              Result

//    >=35 to <50                            3rd division

//    >=50 and <60                           2nd division

//    >=60 and <70                           1st division

//    >=70                                   Distinction

//     <35                                   Fail

// let sub1 = Number(prompt("Enter a marks for subject 1: "))
// let sub2 = Number(prompt("Enter a marks for subject 2: "))
// let sub3 = Number(prompt("Enter a marks for subject 3: "))


// let sum = (sub1 + sub2 + sub3) / 3 
// if (sum>=35 && sum<50){
//     console.log("3rd division")
// }
// else if (sum>=50 && sum<60){
//     console.log("2nd division")
// }
// else if (sum>=60 && sum<70){
//     console.log("1st division")
// }
// else if(sum>=70){
//     console.log(" Distinction") 
// }
// else{
//     console.log("Fail")
// }



// Q.4 to calculate the gross salary of the employee for the conditions given below:

//basic sal         DA              HRA             Conveyance
//>=5000            110%            20%             500

//>=3000 && <5000   100%            15%             300

//<3000             90%             10%             200

// let sal = Number(prompt("Enter your basic salary"))
// let grossSal;
// let da;
// let hra;
// if(sal>=5000){
//     da = sal*1.1;
//     hra = sal*0.2;
//     grossSal = sal + da + hra + 500
//     console.log(grossSal)
// }
// else if(sal>=3000 && sal<5000){
//     da = sal*1;
//     hra = sal*0.15;
//     grossSal = sal + da + hra + 300
//     console.log(grossSal)
// }
// else{
//     da = sal*0.9;
//     hra = sal*0.10;
//     grossSal = sal + da + hra + 200
//     console.log(grossSal)
// }


// Q. 5 Write a program to input the code of a particular item, quantity purchased and rate. Then calculate
// the purchased price and print it along with gift to be presented. The gifts to the customers are given
// in the following manner:
// Amount of Purchase (Rs.)             Gift
// Between 100 to 500                   A key ring
// Between 500 to 1000                  A leather purse
// Above 1000                           A pocket calculator

// let item = prompt("Enter the item name: ")
// let quantity = Number(prompt("Enter the number of quantity: "))
// let rate = Number(prompt("Enter the price of an item"))
// let total 
// console.log("number of quantity: " + quantity)
// console.log("Price rate of an item: " + rate)
// if (rate>=100 && rate<=500){
//     total = rate * quantity
//     console.log("The gift is a key ring " + total)
// }
// else if (rate>=501 && rate<=1000){
//     total = rate * quantity
//     console.log("The gift is a leather purse " + total)
// }
// else{
//     total = rate * quantity
//     console.log("The gift is a pocket calculator " + total)    
// }




// Q. 6 Write a program to take the monthly salary from the user, find and display income tax with the help
// of the following slab:
// Monthly Salary       Income Tax
// 8000 or less             Nil
// 8000-9000            20% of Monthly salary
// 9000-10000           30% of Monthly salary
// 10000 or above        40% of Monthly salary

// let sal = Number(prompt("Enter the salary"))
// let sum
// let total
// if (sal<=8000){
//     console.log("No Incom Tax will be applying")
// }
// else if (sal>=8001 && sal<=9000){
//     sum = sal*0.2
//     console.log("20% of montly salary " + sum)
//     total = sal - sum
//     console.log("Total amount of salary will get: " + total)
// }
// else if (sal>=9001 && sal<=10000){
//     sum = sal*0.3
//     console.log("30% of Monthly salary " + sum)
//     total = sal - sum
//     console.log("Total amount of salary will get: " + total)
// }
// else{
//     sum = sal*0.4
//     console.log("40% of Monthly salary " + sum)
//     total = sal - sum
//     console.log("Total amount of salary will get: " + total)
// }




// Q. 7 A salesman earns a commission on the value of his sales as per the following table.
// A salesman earns a commission on the value of his sales as per the following table.
// Value of sales(Rs.)          Commission(%)
// 1 - 999                           1
// 1000 - 9999                       5
// 10000 - 99999                    10
// Write a program to calculate and print the commission using sale value as input. The program is to
// keep on calculating the commission for various salesmen until a sales value zero is input.

// let amt = Number(prompt("Enter the Commission amount: "))
// let total
// let sum
// if (amt>=1 && amt<=999){
//     total = amt*0.01
//     sum = amt-total
//     console.log("Total value on 1% is: " + total)
//     console.log("Total amount is: " + sum)
// }
// else if (amt>=1000 && amt<=9999){
//     total = amt*0.05
//     sum = amt-total
//     console.log("Total value of 5% is: " + total)
//     console.log("Total amount is: " + sum)
// }
// else if (amt>=10000 && amt<=99999){
//     total = amt*0.1
//     sum = amt-total
//     console.log("Total value of 10% is: " + total)
//     console.log("Total amount is: " + sum)
// }
// else{
//     console.log("Enter a proper value: ")
// }




// Q. 9 Write a program using method to calculate the salary increment of employees based on their basic
// pay. Calculate the final salary after increment.
//             Basic Pay           Rise
//              10700/-            550/-
//              12500/-            750/-
//              15000/-            1050/-

// let sal = Number(prompt("Enter your basic salary: "))
// let total
// if(sal == 10700){
//     total = sal + 550
//     console.log("Your salary got increment with 550")
//     console.log("Total salary is: " + total)
// }
// else if(sal == 12500){
//     total = sal + 750
//     console.log("Your salary got increment with 750")
//     console.log("Total salary is: " + total)
// }
// else if(sal == 15000){
//     total = sal + 1050
//     console.log("Your salary got increment with 1050")
//     console.log("Total salary is: " + total)
// }
// else{
//     console.log("Enter the salary from the given data")
// }



// Q. 10 Write a program to calculate the prize amount for a cricketer depending upon his test average. Use
// the following date.
// Test Average            Graduate            Prize Amount
// > = 80                      A               Rs. 1,00,000.00                       
// 80> & > = 65                B               Rs. 50,000.00
// 50> & > = 40                C               Rs. 25,000.00
// <40                         D               Rs. 10,000.00

// let avg = Number(prompt("Enter the average: "))
// let sum
// if (avg > 80){
//     console.log("Your grade is A ")
//     console.log("Your prize money is 1,00,000.00")    
// }
// else if (avg<=80 && avg>=65){
//     console.log("Your grade is B ")
//     console.log("Your prize money is 50,000.00")    
// }
// else if (avg<=66 && avg>=40){
//     console.log("Your grade is C ")
//     console.log("Your prize money is 25,000.00")    
// }
// else{
//     console.log("Your grade is D ")
//     console.log("Your prize money is 10,000.00")    
// }



// Q. 11 There are 55 employees in an organization. You have to display the number of employees getting
// Net-Salary above 20000 by taking only Basic_Salary as input and following the table given below.
// Basic Salary        DA (% Basic_salary)         IT (% Gross_Salary)
// Below 5000                  8%                          6%
// 5000 to < 10000             15%                         9%
// 10000and above              18%                         12%
// Where DA and IT are Dearness Allowance and income Tax respectively.
// Gross_Salary = Basic_Salary + DA
// Net_Salary = Gross_Salary - IT

// let sal = Number(prompt("Enter your salary: "))
// let Gross_Salary,  Net_Salary, DA,  IT
// if (sal <= 5000){
//     DA = sal*0.08
//     IT = sal*0.06
//     Gross_Salary = sal + DA
//     Net_Salary = Gross_Salary - IT
//     console.log("Total salary is: " + Net_Salary)
// }
// else if(sal>=5001 && sal<=10000){
//     DA = sal*0.15
//     IT = sal*0.09
//     Gross_Salary = sal + DA
//     Net_Salary = Gross_Salary - IT
//     console.log("Total salary is: " + Net_Salary)    
// }
// else{
//     DA = sal*0.18
//     IT = sal*0.12
//     Gross_Salary = sal + DA
//     Net_Salary = Gross_Salary - IT
//     console.log("Total salary is: " + Net_Salary)
// }



// Q. 12 Write a program to assign values the variable basic salary and calculate the DA and the gross salary
// and print them. The DA is calculated as per the rules given below:
// if basic< 2000              then DA is 5% of basic
// if basic> = 2000 & <7000    then DA is 8% of basic
// if basic> = 7000& < 10000   then DA is 10% of basic
// if basic> = 10000           then DA is 12% of basic
// Gross Salary = Basic + DA.

// let sal = Number(prompt("Enter your salary: "))
// let DA, Gross_Salary
// if (sal <= 2000){
//     DA = sal*0.05
//     console.log("DA is: " + DA)
//     Gross_Salary = sal + DA
//     console.log("Gross Salary is: " + Gross_Salary)
// }
// else if (sal>=2001 && sal<=7000){
//     DA = sal*0.08
//     console.log("DA is: " + DA)
//     Gross_Salary = sal + DA
//     console.log("Gross Salary is: " + Gross_Salary)
// }
// else if (sal>=7001 && sal<=10000){
//     DA = sal*0.10
//     console.log("DA is: " + DA)
//     Gross_Salary = sal + DA
//     console.log("Gross Salary is: " + Gross_Salary)
// }
// else{
//     DA = sal*0.12
//     console.log("DA is: " + DA)
//     Gross_Salary = sal + DA
//     console.log("Gross Salary is: " + Gross_Salary)
// }

// Q. 13 Calculate and display the traveling allowance for su employees or an organization by taking distance
// traveled as input. The organization gives traveling allowance according to the following table.
//         Distance                Amount.
//         < = 20                  Rs 200
//         >20 and < = 50          Rs 200 + Rs 5 per extra km above 20
//         >50 and < = 100         Rs 500 + Rs 5 per extra km above 50.
//         >100                    Rs 15 per km.

// let distance = Number(prompt("Enter the distance: "))
// let allowance = 0;

// if (distance <= 20) {
//     allowance = 200;
//     console.log("The allowance is: " + allowance)
// } 
// else if (distance > 20 && distance <= 50) {
//     allowance = 200 + 5 * (distance - 20);
//     console.log("The allowance is: " + allowance)
// }
// else if (distance > 50 && distance <= 100) {
//     allowance = 500 + 5 * (distance - 50);
//     console.log("The allowance is: " + allowance)
// }
// else {
//         allowance = 15 * distance;
//         console.log("The allowance is: " + allowance)
// }

// Q. 14 Commission according to the following tables:
//         Sale (in Rs.)           Commission(% of sale)
//         8000 or less                        Nil
//         8000 - 9000                         12%
//         9000 - 10000                        15%
//         10000 or above                      18%
// apart from this each salesman gets a fixed allowance of Rs 550 and also a bonus of Rs 500 if a
// salesman achieves the target of 10000. Display the total income of each salesman along with the
// sales. Also display the number of salesman having income of 5000 or above.

// let sale = Number(prompt("Enter the commission: "))
// let DA, Gross_Salary
// if (sale<=8000){
//     console.log("Commission is Nil")
// }
// else if (sale>=8001 && sale<=9000){
//     DA = sale*0.12
//     console.log("Commission is: " + DA)
//     Gross_Salary = sale + DA
//     console.log("Total salary is: " + Gross_Salary)
// }
// else if (sale>=9001 && sale<=10000){
//     DA = sale*0.15
//     console.log("Commission is: " + DA)
//     Gross_Salary = sale + DA
//     console.log("Total salary is: " + Gross_Salary)
// }
// else{
//     DA = sale*0.18
//     console.log("Commission is: " + DA)
//     Gross_Salary = sale + DA + 550 + 500
//     console.log("Total salary is: " + Gross_Salary)
// }
