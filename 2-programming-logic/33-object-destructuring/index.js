const person = {
  name: 'Caio',
  secondName: 'Martins',
  age: 20,
  location: {
    country: 'Portugal',
    city: 'Porto',
  },
};

// const name = person.name -> normal atribution
// const { name = 'not exists', secondName, age } = person; // default value to name case
// const { name: myvar } = person; // in case i want a custom name
// console.log(myvar);
// console.log(name, secondName, age);

// getting all props
const {
  name,
  secondName,
  age,
  location: { country, city },
} = person;

console.log(name, secondName, age, country, city);

// we can use the rest operator
const { name: name1, ...rest } = person;
console.log(rest);
