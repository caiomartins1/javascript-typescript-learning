/**
 * Callback functions:
 */

function f1(callback) {
  setTimeout(() => {
    console.log('f1');
    if (callback) callback();
  }, 500);
}
function f2(callback) {
  setTimeout(() => {
    console.log('f2');
    if (callback) callback();
  }, 1000);
}
function f3(callback) {
  setTimeout(() => {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

function rand(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) - min);
}

// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log('end');
//     });
//   });
// });
// or

function f1Callback() {
  f2(f2CallBack);
}

function f2CallBack() {
  f3(f3CallBack);
}

function f3CallBack() {
  console.log('end');
}

f1(f1Callback);
