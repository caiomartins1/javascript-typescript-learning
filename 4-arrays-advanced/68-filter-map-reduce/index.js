const numbers = [1, 5, 9, 13, 15, 20, 35, 10, 22, 56, 230, 344, 55];

// return the sum of the double of all pairs
const sum = numbers
  .filter((el) => el % 2 === 0)
  .map((el) => el * 2)
  .reduce((acc, el) => {
    return acc + el;
  }, 0);

console.log(sum);
