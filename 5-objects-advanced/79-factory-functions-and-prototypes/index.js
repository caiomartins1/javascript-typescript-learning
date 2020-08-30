const greeting = {
  greeting: function () {
    console.log('Heeeeeello there!');
  },
};

const personPrototype = { ...greeting };

function createPerson(name, secondName) {
  return Object.create(personPrototype, {
    name: { value: name },
    secondName: { value: secondName },
  });
}

const p1 = createPerson('Caio', 'Martins');
p1.greeting();
