let x = 10 // eslint-disable-line
x = 0b1010;
const y = 10; // literl type (inspect variable) y has type 10

let b: 100 = 100; // eslint-disable-line

let c = 100 as const; // eslint-disable-line

const person = {
  name: 'caio' as const,
  age: 23,
};

function pickColor(color: 'Red' | 'Green' | 'Blue') {
  // literal types
  return color;
}

pickColor('');
export default x;
