const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.Controller');

router.post('/', registerController.handleNewUser);

module.exports = router;