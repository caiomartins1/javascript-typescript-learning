let num1 = 25; // number
let num2 = 0.8; // number
let integer = 5;

console.log(num1.toString() + num2); // temporally converting num1 to a string to concat with num2
num1 = num1.toString(); // changing num1 number to a string

let num = 17223;
console.log(num.toString(2)); // logs a the binary value of num as a string

let num3 = 12.87236452736;
console.log(num3.toFixed(2)); // logs num3 rounded with 2 decimal places

console.log(Number.isInteger(integer)); // returns true if the given value is an integer and false otherwise

console.log(Number.isNaN(85 * 'ola')); // checks if the given value is NaN

// Javascript follows IEEE 754-2008 rules to math with floating values
let val1 = 0.7;
let val2 = 0.1;
val1 += val2; // 0.8
val1 += val2; // 0.9
val1 += val2; // 1

val1 = Number(val1.toFixed(2));

console.log(val1);

// NOTE: Javascript has a small imprecision when working with floating values
