const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Name: <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `);
});

app.get('/contact', (req, res) => {
  res.send('Thanks for getting in touch with us.');
});

app.post('/', (req, res) => {
  res.send(`Received your name!`);
});

app.listen(3000, () => {
  console.log('Server Running on port 3000');
});
