/**
 * Comparison Operators: (always return a boolean)
 *  > -> greater than
 *  >= -> greater than or equal
 *  < -> less than
 *  <= -> less than or equal
 *  == -> equal (only value, not recomended)
 *  === -> strict equal (value and type)
 *  != -> not equal (only value, not recomended)
 *  !== -> strict not equal (value and type)
 */

const num1 = 10; // number
const num2 = '10'; // string

console.log(num1 == num2); // true because js casts and compare (type coersion)
console.log(num1 === num2); // false because js do not cast
