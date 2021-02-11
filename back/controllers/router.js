/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./userController'),
    SessionController = require('./SessionController')

/*
 * Router
 ***********/

// Article
router.route('/user')
    .post(userController.register)
    .delete(userController.deleteAll)

// Article ID
router.route('/user/:id')
    .put(userController.editOne)
    .delete(userController.deleteOne)

router.route('/login')
    .post(userController.post)
    .get(userController.get)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;