// try catch will prevent the error do be shown to the user
try {
  console.log(name);
} catch (err) {
  console.log('Name dos not exists');
  // console.log(err); // avoid log the err to the user because its not a good UX and also is not safe
}

// throwing errors
function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Invalid inputs'); // there is a lot of error classes in JS!
    // throw 'Invalid Input'; -> we can also throw only a string
  }

  return x + y;
}
try {
  sum('a', 'b');
} catch (err) {
  // console.log(err);
  console.log('Something user friendly');
}
