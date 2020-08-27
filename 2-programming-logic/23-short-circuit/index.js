/**
 * falsy values:
 *  - false
 *  - 0
 *  - '' / "" / ``
 *  - null
 *  - undefined
 *  - NaN
 */

console.log('Caio' && 'Martins'); // logs the last true value
console.log('Caio' && null && 'Martins'); // logs the only falsy value
console.log('Caio' && null && 'Martins' && undefined); // logs the first falsy value

// &&
function greeting() {
  return 'Hi';
}

let isExecuted = false;

console.log(isExecuted && greeting()); // false

isExecuted = true;

console.log(isExecuted && greeting()); // greeting()

// ||
console.log(0 || null || undefined || 'Caio' || true); // logs first truthy value

const userColor1 = null;
const defaultColor = userColor1 || 'red';
console.log(defaultColor); // 'red'

const userColor2 = 'black';
const defaultColor1 = userColor2 || 'red';
console.log(defaultColor1); // 'black'
