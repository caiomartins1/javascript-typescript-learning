const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

for (let number in numbers) {
  if (number > 10) {
    break;
  }
  if (number % 2 === 0) {
    continue;
  }

  console.log(number);
}
