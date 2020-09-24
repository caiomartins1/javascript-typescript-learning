require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.emit('ready');
  })
  .catch((e) => console.log(e));

const { globalMiddleware } = require('./src/middlewares/middleware');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// our own middlewares
app.use(globalMiddleware);
app.use(routes);

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Server Running on port 3000');
  });
});
