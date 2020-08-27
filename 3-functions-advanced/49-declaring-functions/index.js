/** Declaring a function (Function hoisting)
 * Hoisting will elevate all function and var declaring statements to the top of the file, thats why we can
 * call it before declare it.
 */
greeting();
function greeting() {
  console.log('Hi');
}

/**
 * In JavaScript, functions are first class objects -> we can use them as data
 * Function expression
 */
const getName = function () {
  // anonymous functions are more common, but we can find code like this:
  // const getName = function anyName () {}
  return 'Caio';
};

getName();
function execute(func) {
  func();
}
console.log(execute(getName));

/**
 * Arrow Funcion (Differs from functions declared with the keyword function when using the 'this' keyword)
 */
const arrowFunc = () => {
  console.log('Arrow fun');
};

/**
 * Inside objects -> we call functions inside an object methods
 */
const obj = {
  greeting: function () {
    console.log('Greeting');
  },

  // in newer versions of javascript we can also do:
  greetingNew() {
    console.log('Newer');
  },
};
obj.greeting();
obj.greetingNew();
