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
    newsController = require('./news/newsController'),
    almanaxController = require('./general/almanaxController'),
    encyclopedieController = require('./general/encyclopedieController'),
    ratingController = require('./general/ratingController')


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

router.route('/profilUser/:id')
    .get(userController.getProfilId)

router.route('/profil/:token')
    .get(userController.getProfil)

router.route('/profil_edit/:id')
    .post(userController.editProfil)

router.route('/profil_edit_avatar/:id')
    .post(userController.editProfilAvatar)

// Mail
router.route('/mailNotif/:id')
    .get(userController.mailNotif)

router.route('/mailbox/:pseudo')
    .get(userController.mailbox)

router.route('/mailbox/:id')
    .post(userController.mailpost)

router.route('/recipientList')
    .get(userController.recipientList)

router.route('/mailbox_delete/:id')
    .get(userController.mailDelete)

router.route('/contact')
    .post(userController.contact)

// News
router.route('/news')
    .get(newsController.get)
    .post(upload.array('files', 1), newsController.post)

router.route('/news2')
    .get(newsController.get2)
    .post(upload.array('files', 1), newsController.post)

router.route('/news/:id')
    // .get(newsController.get)
    .post(upload.array('files', 1), newsController.editId)

router.route('/delete_news/:id')
    // .get(newsController.get)
    .post(newsController.deleteId)

router.route('/article/:id')
    .get(newsController.getId)

// Almanax
router.route('/almanax')
    .get(almanaxController.get)

router.route('/almanax2')
    .get(almanaxController.get2)


// Encyclopedie
router.route('/encyclopedie')
    .get(encyclopedieController.get)

// Classe
router.route('/encyclopedie/classes')
    .get(encyclopedieController.getClasses)

router.route('/encyclopedie/classesId/:title')
    .get(encyclopedieController.getClassesId)

router.route('/encyclopedie/classesRoles/:roles')
    .get(encyclopedieController.getClassesRoles)

// Rating
router.route('/ratings')
    .post(ratingController.post)
    .get(ratingController.get)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;