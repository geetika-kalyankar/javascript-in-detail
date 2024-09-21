//Increment and decrement operators

// ++              --

//pre - increment / decrement

//let a = 10;
//console.log(--a);//9
//console.log(++a);//10 

//post - increment / decrement

// console.log(a++);//11
//console.log(a--);//10


//let b = 1
//console.log(b++ + ++b + --b - b++ - --b);
        //  1   +  3  +  2  - 2   - 2
        // 6-4
        //2
        
// let i =19, j = 29, k;

// k = i-- - i++ + --j - ++j + --i -j-- + ++i - j++;
// //   19 - 18 +  28 - 29 + 18 - 29    + 19 - 28        // i=19,j=29, k=-20,
// console.log( i, j,k);



//let a = 12, b = 13, c = 11;

//a = a++ + --b + c++;
//a= 12 +  12 + 11
//console.log(a);//35

//b = b++ + ++a *2;
//b = 12  + 36 * 2
//console.log(b);//84

//c = c++ + a++ *(++b);
//c= 12 + 36  * 85
//console.log(c);//3072


//let s = 11, p = 26, d = 10
//s = ++s + --p + d++ - ++s;
//  12 + 25 +   10 -  13 // 34 
//               1
//console.log(s);
//p = s++ + ++d - p++ - d--;
// 34 + 12    - 25  - 12 
//   1           1      -1     // 9
//console.log(p);
//d = ++d + p++ - ++s - ++s - --d * 6;
//   12 + 9  - 36 - 37 - 11*6  //-118

//console.log(d);
