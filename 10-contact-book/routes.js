const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

const { loginRequired } = require('./src/middlewares/middleware');

route.get('/', homeController.index);

// Login routes
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Contact Routes
route.get('/contact', loginRequired, contactController.index);
route.get('/contact/:id', loginRequired, contactController.editIndex);
route.post('/contact/edit/:id', loginRequired, contactController.edit);
route.post('/contact/register', loginRequired, contactController.register);
module.exports = route;
