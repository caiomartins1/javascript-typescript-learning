let x; // TS cannot infer x type by now
if (typeof x === 'undefined') x = 20;
console.log(x); // because of line 2, now x type is number

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;

  return null;
}

const squareOfNumber = squareOf(1); // number | null
const squareOfWhatever = squareOf('oi'); // number | null

if (squareOfNumber === null) {
  console.log('OOOOOF... null');
} else {
  console.log(squareOfNumber * 2); // TS Knows that squareOfNumber can only be a number here
}
