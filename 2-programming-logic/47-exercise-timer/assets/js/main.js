function scope() {
  const p = document.querySelector('#timer');

  let seconds = 0;
  let timer;

  function getTime(seconds) {
    const date = new Date(seconds * 1000); // Date() expects input in ms, so * 1000 converts to seconds

    return date.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'GMT',
    });
  }

  function initTimer() {
    timer = setInterval(() => {
      seconds++;
      p.innerHTML = getTime(seconds);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('start')) {
      clearInterval(timer);
      p.classList.remove('paused');
      initTimer();
    }
    if (el.classList.contains('pause')) {
      p.classList.add('paused');
      clearInterval(timer);
    }
    if (el.classList.contains('restart')) {
      clearInterval(timer);
      p.classList.remove('paused');
      p.innerHTML = '00:00:00';
      seconds = 0;
    }
  });
}

scope();
