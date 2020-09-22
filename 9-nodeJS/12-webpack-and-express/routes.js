const express = require('express');

const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

const routes = express.Router();

routes.get('/', homeController.homePage);
routes.post('/', homeController.handlePost);

routes.get('/contact', contactController.homePage);

module.exports = routes;
