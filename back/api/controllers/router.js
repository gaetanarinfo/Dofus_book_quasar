/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./users/userController'),
    SessionController = require('./users/SessionController'),
    resetpasswordController = require('./users/resetpasswordController')

/*
 * Router
 ***********/

// Article
router.route('/register')
    .post(userController.register)

router.route('/login')
    .post(userController.post)

router.route('/password_reset')
    .post(resetpasswordController.passwordReset)

router.route('/session')
    .get(SessionController.get)

// Routes reset password
router.route('/reset_password/:token')
    .get(resetpasswordController.get)
router.route('/reset_password')
    .post(resetpasswordController.post)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;