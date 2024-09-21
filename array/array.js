// const arr = [1,2,3,4,5]
// console.log(arr.pop()); 
// console.log(arr.shift());
// console.log(arr.unshift(5))
// console.log(arr.push(1))
// console.log(arr)
// //JavaScript Array:
// //Array in JavaScript can store any type of data. (primitive and non primitive) (hetrogenous data)
// //Arrays don't have fixed value. array value can differ by size of the array.
// //pre-defined methods to work on array 

// //const arr1=[1,2,3,'shweta','geetika',true,false,undefined,null,function abc(){console.log('abc'), [12,3,5,6],{id:1, id:3};}]

// // const a =5
// // const b = a
// // console.log(a);//5
// // console.log(b);//5

// //primitive vs reference (non-primitive)

// // let a = 5
// // let b = a
// // b++
// // console.log(a);// 5
// // console.log(b);// 6

// // const arr1=[1,2,3,4,5,6]
// // const arr2 = arr1
// // arr2[2]=10
// // console.log(arr1);// 1210456
// // console.log(arr2);// 1210456

// // const array = [1,2,3,4,5,6]
// // //length property is used to check length of the arrays and string
// // console.log(array.length);
// //Array.isArray(arr_name) -> is used to check array is present or not (true/false)
// // console.log(Array.isArray(array));
// // array[2]=33
// // console.log(array);

// // let avg= 'jahsgd'
// // console.log(Array.isArray(avg));

// //Array Indexing:
// // const array= [1,2,34,4,2,5,2,12,34,554,34,12,32,43,54,2]
// // console.log(array[0]);//1
// // //For accessing the last element in the array we use array.length-1
// // console.log(array[array.length-1]);//2
// // console.log(array[array.length-8]);//34
// // console.log(array[array.length]);//Undefined

// // const arr=[1,2,3,4]
// // console.log(arr[arr.length-1]);//4
// // console.log(arr[arr.length-3]);//2
// // console.log(arr[arr.length]);// Undefined

// // Push, Pop, Shift, Unshift
// // const arr = [1,2,3,4,5]
// // arr.push(6)// push is used to insert an element at last index
// // //console.log(arr);
// // arr.pop()//pop is used to delete an element at last index
// // console.log(arr);
// // arr.unshift(6)//Unshift is used to add an element in fisrt index
// // console.log(arr);
// // arr.shift()//shift is used to delete an element in fisrt index
// // console.log(arr);

// /*----------- For Loop in Array -----------*/
// // const numbers = [234,24,2,123,45,545,54,2,3]

// // for(let i=0; i<numbers.length; i++){
// //       console.log(numbers[i]);
// // }

// // const names = ['shweta', 'geetika','monalisa','rose']

// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// /*------------slice()-----------*/
// /*Description: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// Usage: To create a sub-array without modifying the original array.
// */

// // let arr = [1, 2, 3, 4];
// // let subArr = arr.slice(2,3); // subArr is [2, 3], arr is still [1, 2, 3, 4]
// // console.log(subArr);



// /*--------------concat()------------*/
// /*
// Description: Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Usage: To combine multiple arrays.
// */

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combinedArr = arr1.concat(arr2); // combinedArr is [1, 2, 3, 4]


// /*---------------sort()------------*/
// /*
// Description: Sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points.
// Usage: To sort elements.
// */

// let arr = [3, 1, 4, 2];
// arr.sort(); // arr is now [1, 2, 3, 4]

// /*------------------ reverse()-------------*/
// /*
// Description: Reverses the array in place. The first array element becomes the last, and the last array element becomes the first.
// Usage: To reverse the order of elements.
// */


// let arr3 = [1, 2, 3];
// // arr3.reverse(); // arr is now [3, 2, 1]