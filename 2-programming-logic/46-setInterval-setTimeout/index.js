function getHour() {
  const date = new Date();

  return date.toLocaleTimeString('pt-br', {
    hour12: false,
  });
}

const timer = setInterval(() => {
  console.log(getHour());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 10000);

setTimeout(() => {
  console.log('Message after 15 secs of execution');
}, 15000);
