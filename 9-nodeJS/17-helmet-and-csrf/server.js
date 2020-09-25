require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const {
  globalMiddleware,
  checkCsrfError,
  csrfToken,
} = require('./src/middlewares/middleware');
const routes = require('./routes');
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

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'asldjaq31409582dwjklsadaljp239129rghlk()',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(sessionOptions);
app.use(flash());

app.use(csrf());
// our own middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfToken);
app.use(routes);

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Server Running on port 3000');
  });
});
