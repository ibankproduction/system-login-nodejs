const route = require('express').Router();
const loginController = require('../controllers').login;
const verifUser = require('../config/verify');

route.get('/', verifUser.isLogout, loginController.login);
route.get('/login', loginController.login);

route.post('/auth', loginController.loginAuth);

module.exports = route;

