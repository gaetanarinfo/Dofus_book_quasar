/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./userController')

/*
 * Router
 ***********/

// Article
router.route('/user')
    .get(userController.get)
    .post(userController.post)
    .delete(userController.deleteAll)

// Article ID
router.route('/user/:id')
    .put(userController.editOne)
    .delete(userController.deleteOne)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;