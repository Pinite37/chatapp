const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');

const router = express.Router();

// create user api

router.post('/register', registerUser)

// check user email

router.post('/checkemail', checkEmail)

// check user password
router.post('/password', checkPassword)


module.exports = router