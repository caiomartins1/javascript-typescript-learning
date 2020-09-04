/**
 * Promises: We work with promises when we will use something that we dont know how long it will take
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

wait('1', random(1, 3))
  .then((data) => {
    // data is the param passed to resolve, so data will be msg
    console.log(data);
    return wait('2', random(5, 10));
  })
  .then((data) => {
    console.log(data);
    return wait(222, random(1, 3));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log('Error!', e);
  });

console.log('This will apperar before any promise');
