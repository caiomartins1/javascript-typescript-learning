/** Arithmetic Operators
 *  + -> add and concat
 *  -
 *  *
 *  /
 *  ** -> poten
 *  % -> rest of division
 *
 *  PRECEDENCE (ORDER)
 *  ()
 *  **
 *  * / %
 *  + -
 *
 *  Increment / Decrement
 *  varname++
 *  varname--
 *
 *  Assign Operators
 *  +=
 *  -=
 *  *=
 *  /=
 *  %=
 */

// Difference between varname++ and ++varname
let num1 = 1;
let num2 = 1;

console.log(num1++); // Print 1 and then increment variable
console.log(++num2); // increment variable and then print it

// Shorthands for:
let num3 = 0;
num3 = num3 + 50;

// we can use an assign operator instead
num3 += 50;

// Not a number
let value1 = 5;
let value2 = 'Caio';
console.log(value1 * value2); // NaN

// In some cases, javascript will automatically convert a value to avoid throw an error
let value3 = 5;
let value4 = '10';
console.log(value3 * value4); // 50

// Casting
let value5 = 5;
let value6 = parseInt('10'); // NOTE: parseInt will convert a float to an Int without the decimal part
let value7 = Number('190'); // Best use, works for float and integers values
console.log(value5 * value6); // For floating values use parseFloat instead.
