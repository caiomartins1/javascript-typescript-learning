const path = require('path');
const express = require('express');
const app = express();
const { globalMiddleware } = require('./src/middlewares/middleware');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// our own middlewares
app.use(globalMiddleware);
app.use(routes);

app.listen(3000, () => {
  console.log('Server Running on port 3000');
});
