/**
 * Closures: closure is the possibility of a function to access its lexical scope
 */

function returnFunc() {
  const name = 'Caio';
  return function () {
    return name;
  };
}

const func = returnFunc();
console.dir(func);
