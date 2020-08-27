const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const res = a1.concat(a2); // concat method accepts more params and keeps concatenating
console.log(res);
console.log('#############');

// we can also use the spread operator to concat arrays as follows:
const concatWithSpread = [...a1, ...a2];
console.log(concatWithSpread);
