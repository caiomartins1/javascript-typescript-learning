const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const person = {
  name: 'Caio',
  secondName: 'Cesar',
  age: 20,
  address: {
    country: 'Brazil',
    city: 'Sao Paulo',
  },
};

// for in -> reads the indexes or keys
for (let index in numbers) {
  console.log(index, numbers[index]);
}

for (key in person) {
  console.log(key, person[key]);
}
