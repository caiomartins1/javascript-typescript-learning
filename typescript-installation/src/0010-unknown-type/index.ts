// safer any
let x: any;
x = 10;
x = 'ca';
x = undefined;
x = null;

const y = 500;
console.log(x + y); // not safe

let a: unknown;
a = 10;
a = 'ca';
a = undefined;
a = null;

const z = 500;
console.log(a + z); // safer
