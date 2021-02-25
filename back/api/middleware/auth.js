/*
 * Import Module
 ****************/
const User = require('../database/models/users'),
    jwt = require('jsonwebtoken')

/*
 * Controller
 *************/
module.exports = (req, res, next) => {

    console.log(localStorage.getItem('token'));

    var decoded = jwt.decode(token, { complete: true });

    const sess = decoded.payload

    console.log(sess);

    // On recupere l'utilisateur dans le model users
    User.findById(sess._id, (error, user) => {

        console.log(user);

        if (error || !user) {
            return res.redirect('/')
        }

        next()
    })

}