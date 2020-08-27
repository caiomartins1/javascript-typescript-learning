/**
 * 0 - 11 -> good morning
 * 12 - 17 -> good afternoon
 * 18 - 23 -> good evening
 */

// ifs can be used alone
// elses and elseifs needs and if before
// only one else on the end

const hour = 19;

if (hour >= 0 && hour <= 11) {
  console.log('good morning');
} else if (hour >= 12 && hour <= 17) {
  console.log('good afternoon');
} else if (hour >= 18 && hour <= 23) {
  console.log('good evening');
} else {
  console.log('invalid hour');
}

const money = 0;

if (money) {
  console.log('buy a car');
} else {
  console.log('no money');
}
