const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  });
};

const loadResult = (response) => {
  const result = document.querySelector('.result');
  result.innerHTML = response;
};

const loadPage = async (el) => {
  const href = el.getAttribute('href');

  try {
    const result = await request({
      method: 'GET',
      url: href,
    });

    loadResult(result);
  } catch (e) {
    console.log(e);
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
