/**
 * Write a function that receives a number and:
 *  -> return 'Fizz' case number % 3 === 0
 *  -> return 'Buzz' case number % 5 === 0
 *  -> return 'FizzBuzz' case number % 3 === 0 && number % 5 === 0
 *  -> return number case !(number % 3 === 0 || number % 5 === 0)
 *
 *  Should:
 *  -> check if number is really a number
 *  -> number should be in range of 0 and 100
 */

const validateInput = (number) => {
  if (typeof number !== 'number') return false;
  if (number > 100 || number < 0) return false;
  return true;
};

const fizzBuzz = (number) => {
  if (!validateInput(number)) return 'Input Error';

  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';

  return number;
};

// testing
for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
