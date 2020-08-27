// Math methods

let number = 25.54673;
let roundedDown = Math.floor(number);
console.log('roundedDown', roundedDown);

let roundedUp = Math.ceil(number);
console.log('roundedUp', roundedUp);

let autoRound = Math.round(number);
console.log('autoRound', autoRound);

let maxOfSequence = Math.max(1, 2, 3, 5, 5, 12839, 0, -5, 0.1);
console.log('maxOfSequence', maxOfSequence);

let minOfSequence = Math.min(0.00001, 0.1, -8, 10, 3483948, 10);
console.log('minOfSequence', minOfSequence);

let random = Math.round(Math.random() * (10 - 5) + 5);
console.log('random', random);

// IMPORTANT -> infinity is evaluated with true
console.log(!!(100 / 0));
