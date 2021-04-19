type Age = number;
type RGB = 'Red' | 'Green' | 'Blue';
type CMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type ColorsAvailable = RGB | CMYK;

type Person = {
  name: string;
  age: Age;
  color?: ColorsAvailable;
};

const person: Person = {
  name: 'Caio',
  age: 21,
};

export default function setColor(
  person: Person,
  color: ColorsAvailable,
): Person {
  return { ...person, color };
}
