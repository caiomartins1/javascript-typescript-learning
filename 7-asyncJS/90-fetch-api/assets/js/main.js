const loadResult = (response) => {
  const result = document.querySelector('.result');
  result.innerHTML = response;
};

const loadPage = async (el) => {
  const href = el.getAttribute('href');

  try {
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('404 - ');

    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.error(e);
  }
};

document.addEventListener('click', (event) => {
  const el = event.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    event.preventDefault();
    loadPage(el);
  }
});
