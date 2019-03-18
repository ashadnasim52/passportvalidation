const express = require('express');

const loginController = require('../controller/login.controller')

const router = express.Router();

router.get('/login', loginController.handleLogin);

router.post('/login', loginController.handlePostLogin)

module.exports = router;