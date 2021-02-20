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
 * Middleware
 *************/
const auth = require('../middleware/auth')

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

router.route('/profil/:token')
    .get(userController.getProfil)

router.route('/profil_edit/:id')
    .post(userController.editProfil)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;