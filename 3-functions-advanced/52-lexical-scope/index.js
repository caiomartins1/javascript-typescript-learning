/**
 * Lexical Scope: A function remembers where it was declared and everything in that scope
 */

const name = 'Caio';

function sayName() {
  console.log(name);
}

function helper() {
  const name = 'James';
  sayName();
}

helper();
