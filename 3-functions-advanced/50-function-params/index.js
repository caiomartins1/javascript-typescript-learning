/**
 * We call params in the function definition and arguments when we pass some value to a param
 */
function func() {
  console.log('My func');
}
func('will not cause any error');

/**
 * In case of functions declared with the function keyword, we have access to 'arguments'
 * all arguments values are stored in 'arguments' variable even if we have params.
 * example:
 * function a(a,b,c){}
 * a(1,2,3,4,5,6,6);
 * -> inside 'a' function we have 1, 2, 3 in a, b, c respectivally but ALL values are inside 'arguments'
 */
function func2() {
  console.log('My func2');
  console.log(arguments); // indexed object
  console.log(arguments[0]);

  let sum = 0;
  for (let value of arguments) {
    sum += value;
  }

  return sum;
}
console.log(func2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// in the oposite case, the arguments are set to undefined.
// we can also set default values to params
function func3(a, b = 'b', c) {
  // or b = b || 'b';
  console.log(a, b, c);
}
func3('a');

/**
 * Destructuring args
 */
function func4({ a, b, c }) {
  console.log(a, b, c);
}
const obj = {
  a: 'letter a',
  b: 'letter b',
  c: 'letter c',
};
func4(obj);

/**
 * rest operator args
 * Important: rest operator is always the last param because it will use the rest of args privided
 */
function calc(operator, accumulator, ...numbers) {
  for (number of numbers) {
    if (operator === '+') accumulator += number;
    if (operator === '-') accumulator -= number;
    if (operator === '/') accumulator /= number;
    if (operator === '*') accumulator *= number;
  }

  return accumulator;
}

console.log(calc('-', 0, 10, 10, 10, 10));
