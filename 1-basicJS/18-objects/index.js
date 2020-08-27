const person1 = {
  // atributes
  name: 'Caio',
  secondName: 'Martins',
  age: 25,

  // method
  apresentation() {
    console.log(`Hi! my name is ${this.name} and I'm ${this.age} years old!`);
  },

  birthday() {
    this.age++;
  },
};

const person2 = {
  name: 'James',
  secondName: 'Het',
  age: 45,
};

console.log(person1.name); // Caio
person1.birthday(); // 25 -> 26
person1.apresentation();
console.log(person2.name); // James

// params
function personFactory(name, secondName, age) {
  return {
    name,
    secondName,
    age,
  };
}

// NOTE: arguments are the values passed to params

const newPerson1 = personFactory('Caio', 'Martins', 25); // arguments
console.log(newPerson1.name); // Caio
