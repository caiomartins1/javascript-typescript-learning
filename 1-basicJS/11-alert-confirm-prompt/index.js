// Methods from window object -> alert, confirm and prompt
// alert() -> show a message and returns undefined
// confirm() -> show a message with 2 buttons and returns true or false
// prompt() -> get user input and returns it as a string

// Exercice: ask user for 2 numbers, add them and display

const num1 = Number(prompt('First number: '));
const num2 = Number(prompt('Second number: '));

// display
// alert(`The result is ${num1 + num2}`);

let result = document.createElement('H1'); // Create a <h1> element
result.innerHTML = `The result is ${num1 + num2}`; // Insert text
document.body.appendChild(result);
