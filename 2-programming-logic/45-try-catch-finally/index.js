try {
  // this is executed when there is not errors
  console.log('Opened a file');
  console.log('Modified the file and caused an error');
  throw new Error('Error modifying the file');
  console.log('Closed a file');
} catch (err) {
  // this is executed when there is errors
  console.log('Fixed the error');
} finally {
  // this is always executed
  console.log('I will always be executed');
}

function getHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Function waiting for a Date as an argument');
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const yesterday = new Date('08-19-2020 1:20:00');
  console.log(getHour(yesterday));
  console.log(getHour(11));
} catch (err) {
  // threat the error
} finally {
  console.log('Cya!');
}
