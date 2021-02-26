/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router(),
    multer = require('multer')

/*
 * Controller
 *************/
const userController = require('./users/userController'),
    SessionController = require('./users/SessionController'),
    resetpasswordController = require('./users/resetpasswordController'),
    newsController = require('./news/newsController')


// Multer gestion image
const upload = require('../config/multer')

/*
 * Router
 ***********/

// User
router.route('/register')
    .post(userController.register)

router.route('/login')
    .post(userController.post)

router.route('/password_reset')
    .post(resetpasswordController.passwordReset)

router.route('/delete_account/:id')
    .get(userController.deleteAccount)

router.route('/session')
    .get(SessionController.get)

router.route('/reset_password/:token')
    .get(resetpasswordController.get)
router.route('/reset_password')
    .post(resetpasswordController.post)

router.route('/profil/:token')
    .get(userController.getProfil)

router.route('/profil_edit/:id')
    .post(userController.editProfil)

router.route('/profil_edit_avatar/:id')
    .post(userController.editProfilAvatar)

// Mail
router.route('/mailNotif/:pseudo')
    .get(userController.mailNotif)

router.route('/mailbox/:pseudo')
    .get(userController.mailbox)

router.route('/mailbox/:id')
    .post(userController.mailpost)

router.route('/recipientList')
    .get(userController.recipientList)

router.route('/mailbox_delete/:id')
    .get(userController.mailDelete)

// News
router.route('/news')
    .get(newsController.get)
    .post(upload.array('files', 1), newsController.post)

router.route('/news/:id')
    // .get(newsController.get)
    .post(upload.array('files', 1), newsController.editId)

router.route('/delete_news/:id')
    // .get(newsController.get)
    .post(newsController.deleteId)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;