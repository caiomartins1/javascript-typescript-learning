/**
 * Some important methods:
 *  -> Promise.all: receives an array of promises and return an array of resolved promises
 *  -> Promise.race: reveives an array of promises and return the first one to the resolved
 *  -> Promise.resolve: returns a resolved promise
 *  -> Promise.reject: return a rejected promise
 */

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE!');

    setTimeout(() => {
      resolve(msg);
    }, time * 1000);
  });
}

const promises = [
  'First Value',
  wait('Promise 1', 3),
  wait('Promise 2', 1),
  wait('Promise 3', 5),
  'Another Value',
];

// Promise.all
// Promise.all(promises)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e, 'error');
//   });

const promises2 = [
  wait('Promise 1', 3),
  wait('Promise 2', 1),
  wait('Promise 3', 5),
];

// Promise.race
// Promise.race(promises2)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e, 'error');
//   });

// Promise.resolve -> if we change the line Promise.resolve to .reject, we will fall into catch block
function downloadPage() {
  const isInCache = true;

  if (isInCache) {
    return Promise.resolve('Page in cache');
  } else {
    return wait('finished download', 3);
  }
}

downloadPage()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
