// IIFE (Immediatly invoked function expression
// using a function to encapsulate all code so we dont polude the global scope
function myScope() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');

  const people = [];

  function handleSubmition(event) {
    event.preventDefault();

    const name = form.querySelector('.name');
    const secondName = form.querySelector('.secondName');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    people.push({
      name: name.value,
      secondName: secondName.value,
      weight: weight.value,
      height: height.value,
    });

    result.innerHTML += `<p>${name.value}, ${secondName.value}, ${weight.value}, ${height.value}</p>`;
    console.log(people);
  }

  form.addEventListener('submit', handleSubmition);
}

myScope();

// another way to manage events
// form.onsubmit = function (event) {
//   event.preventDefault();
//   console.log('eae');
// };
