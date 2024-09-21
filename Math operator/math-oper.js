//Math Functions:
// console.log(Math.pow(5,3))
// console.log(Math.abs(-5.2))
// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.5))
// console.log(Math.round(4.5));
// console.log(Math.max(5,3,2,10,3,8673))
// console.log(Math.min(5,3,2,10,3,8673))
//console.log(Math.max > Math.min); //false
// console.log(Math.trunc(4.5555));
// console.log(Math.sqrt(16));
// console.log(Math.cbrt(27));
// console.log(Math.log2(8))
// console.log(Math.log10(100))
// console.log(Math.ceil(Math.random()*10));
//It'll generate random value between 0-1 default

// Counting the length of elements present in number

let num = 100;
if (num % 10 !== 0) {
  console.log(Math.ceil(Math.log10(num)));
} else {
  console.log(Math.ceil(Math.log10(num) + 1));
}

// To find range number (max - min + 1) * min
console.log(Math.floor(Math.random() * (25 - 5 + 1) * 5));
