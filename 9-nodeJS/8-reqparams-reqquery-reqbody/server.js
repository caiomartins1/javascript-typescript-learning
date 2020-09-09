/**
 * Types of params:
 *  -> https://www.facebook.com/caiomartins -> 'caiomartins' is a request param
 *  -> https://www.google.com/?search=animals&date=355555 -> 'search' and 'date' are query strings
 *  -> When we POST something, the data goes through the body (request body)
 */

const express = require('express');
const app = express();

// middleware that allows us to use the req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Name: <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `);
});

// this '?' means that the user_id param is optional
app.get('/tests/:user_id?/:otherParam?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}`);
});

app.listen(3000, () => {
  console.log('Server Running on port 3000');
});
