// Function naming follows the same rules as variavle naming
// Functions can receive a parameter and can return a value.
function greeting() {
  console.log('Hello world!');
}

function greetingSomeone(name) {
  console.log(`Good Morning, ${name}!`);
}

function returningGreeting(name) {
  return `Good Morning, ${name}!`;
}

greeting();
greetingSomeone('Caio');

const returnedGreeting = returningGreeting('James');
console.log('returnedGreeting', returnedGreeting);

function sum(x, y) {
  // functions have their own scope, so we cant access a variable created inside their body
  const r = x + y;
  return r;
  // functions exit after finding the return statement
  console.log('This wont be executed');
}
// console.log(r); -> throws an error because r is not defined

const result = sum(1, 1);
console.log('result', result);

console.log(sum()); // NaN because our function will try to add undefined + undefined

function sumDefaultValues(x = 0, y = 0) {
  // if the user dont provide params, their default values will be 0
  return x + y;
} // in this case we dont need ';'

console.log(sumDefaultValues()); // 0 -> 0 + 0

// Other ways to create functions

// Anonymous Function
const squareRoot = function (n) {
  return n ** 0.5;
}; // In this case we need ';' because we used the = sign

console.log(squareRoot(9));

// Arrow function
const multiplication = (number, n) => number * n;

console.log(multiplication(3, 2));
