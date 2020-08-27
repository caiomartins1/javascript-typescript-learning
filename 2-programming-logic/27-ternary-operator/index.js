// condition ? case true : case false

const userLevel = 999;

if (userLevel >= 1000) {
  console.log('VIP User');
} else {
  console.log('Normal User');
}

// all this lines above could be refactored to
const isVip = userLevel >= 1000 ? 'VIP User' : 'Normal User';
console.log(isVip);
