// | => pipe means a union type
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // TS warns about this unsafe operation
  }

  return `${a}${b}`;
}
