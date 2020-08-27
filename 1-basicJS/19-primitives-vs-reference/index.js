/**
 *  Primitives (immutable) -> string, number, boolean, undefined, null (bigInt e symbol)
 *        -> Primitive types ary copied when we use the '=' operator
 *  Reference (mutable) -> array, object, function
 *        -> Reference types will create a reference in memory when we use the '=' operator
 */

// All we applied to arrays is applied to objects
// In this case we did not change the string value, we are only changing the variable value
let name = 'Caio';
name = 'James';
console.log(name);

// to prove strings are immutable we can do
let string = 'Hello World!';
string[0] = 'R';
console.log(string);

// other examples with strings
let a = 'A'; // 'A'
let b = a; // 'A' -> copying the a variable value to b variable
console.log(a, b);

a = 'something else';
console.log(a, b);

// Reference examples
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same value that arr1 points -> ITS NOT A COPY!!

console.log(arr1, arr2);
arr1.push(4);
console.log(arr1, arr2);
arr2.push(5);
console.log(arr1, arr2);

// if we want to literally copy the values from a reference type we use the spread operator (...)
let arr3 = [...arr1];
arr1.push('Wont affect arr3');
console.log(arr3);
