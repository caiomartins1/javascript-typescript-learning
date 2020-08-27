const num = Number(prompt('Enter your number: '));

const titleNum = document.getElementById('number-title');
const text = document.getElementById('text');

titleNum.innerHTML = num;
text.innerHTML = `<p>Square root: ${Math.sqrt(num)}</p>`;
text.innerHTML += `<p>is ${num} integer? ${Number.isInteger(num)}</p>`;
text.innerHTML += `<p>is ${num} NaN? ${Number.isNaN(num)}</p>`;
text.innerHTML += `<p>${num} rounded down: ${Math.floor(num)}</p>`;
text.innerHTML += `<p>${num} rounded up: ${Math.ceil(num)}</p>`;
text.innerHTML += `<p>${num} with 2 decimal places: ${num.toFixed(2)}</p>`;
