/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./users/userController'),
    SessionController = require('./users/SessionController')

/*
 * Router
 ***********/

// Article
router.route('/register')
    .post(userController.register)

router.route('/login')
    .post(userController.post)

router.route('/password_reset')
    .post(userController.passwordReset)

router.route('/session')
    .get(SessionController.get)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;