function random(min = 0, max = 3) {
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

// wait('Msg 1', random())
//   .then((data) => {
//     console.log(data);
//     return wait('Msg 2', random());
//   })
//   .then((data) => {
//     console.log(data);
//     return wait('Msg 3', random());
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => console.log('Last msg: ', data))
//   .catch((e) => console.log(e));

// if we dont use await inside a try catch and we find an error, js will say 'unhandled promise'
async function execute() {
  try {
    const msg1 = await wait('Msg 1', random());
    console.log(msg1);
    const msg2 = await wait('Msg 2', random());
    console.log(msg2);
    const msg3 = await wait('Msg 3', random());
    console.log(msg3);
    console.log('Last msg: ', msg3);
  } catch (e) {
    console.log(e);
  }
}

execute();

/**
 * Promise states:
 *  -> pending
 *  -> fullfilled
 *  -> rejected
 */
