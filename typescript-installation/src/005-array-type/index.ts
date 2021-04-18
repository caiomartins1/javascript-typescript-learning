// Array<T> or T[]
function multplyArgs(...args: Array<number>): number {
  return args.reduce((acc, el) => acc * el, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, el) => acc + el);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((el) => el.toUpperCase());
}

const array1: readonly string[] = ['a', 'b', 'c'];
const array2: ReadonlyArray<string> = ['a', 'b', 'c'];
