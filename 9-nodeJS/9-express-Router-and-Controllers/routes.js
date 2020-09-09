const express = require('express');
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

const routes = express.Router();

routes.get('/', homeController.homePage);
routes.post('/', homeController.handlePost);

routes.get('/contact', contactController.homePage);

module.exports = routes;
