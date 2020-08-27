function* generator1() {
  // code...
  yield 'First Call';
  // code....
  yield 'Second Call';
  // code....
  yield 'Third Call';
}

function* generatorI() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g1 = generator1();
// console.log(g1);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

// we can iterate through
for (let value of g1) {
  console.log(value);
}

const g2 = generatorI();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// we can also continue the work of one generator function inside another one
function* gn1() {
  yield 0;
  yield 1;
  yield 2;
}

function* gn2() {
  yield* gn1();
  yield 3;
  yield 4;
}

console.log('---------------');
const g3 = gn2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

// we can also yield functions

function* gn3() {
  yield function () {
    console.log('y1');
  };

  // return function () {
  //   console.log('Will end the generator function here');
  // };

  yield function () {
    console.log('y2');
  };
}

const g4 = gn3();
const f1 = g4.next().value;
const f2 = g4.next().value;
console.log('------------');
f1();
f2();
