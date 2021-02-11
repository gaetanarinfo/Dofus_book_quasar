"use strict";

/*
 * Import Module
 ****************/
var express = require('express'),
    router = express.Router();
/*
 * Controller
 *************/


var userController = require('./userController'),
    SessionController = require('./SessionController');
/*
 * Router
 ***********/
// Article


router.route('/user').get(userController.get).post(userController.post)["delete"](userController.deleteAll); // Article ID

router.route('/user/:id').put(userController.editOne)["delete"](userController.deleteOne);
router.route('/userLog').post(userController.push);
router.route('/session').get(SessionController.get);
/***********
 * / Router
 */
// on export router pour le récupérer dans ../server.js

module.exports = router;