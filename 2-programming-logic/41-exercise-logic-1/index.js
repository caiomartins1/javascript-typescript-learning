// Write a function that receives two integers and returns the greater
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const max2 = (num1, num2) => (num1 > num2 ? num1 : num2);

// testing
console.log(max(10, 3489349));
console.log(max2(10, 3489349));
