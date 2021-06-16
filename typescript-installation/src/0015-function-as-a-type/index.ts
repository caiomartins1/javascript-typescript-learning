type MapCallBackType = (item: string) => string;

export function mapString(
  array: string[],
  callback: MapCallBackType,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const mappedAbc = mapString(abc, (item) => item.toUpperCase());

console.log(mappedAbc);
