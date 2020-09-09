const path = require('path');

const write = require('./modules/write');
const read = require('./modules/read');

const filePath = path.resolve(__dirname, 'files', 'test.json');

// const people = [
//   { name: 'Caio' },
//   { name: 'James' },
//   { name: 'Pedro' },
//   { name: 'John' },
//   { name: 'Maria' },
//   { name: 'Alice' },
//   { name: 'Kirk' },
// ];
// const peopleJSON = JSON.stringify(people, '', 2);

// write(filePath, peopleJSON);

read(filePath).then((data) => {
  data.forEach((element) => {
    console.log(element.name);
  });
});
